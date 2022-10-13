import { REST } from "@discordjs/rest"
import { SlashCommandBuilder } from "@discordjs/builders"
import { Routes } from "discord-api-types/v9"
import config from "./config"

// List of commands
const commands = [
    new SlashCommandBuilder()
    .setName("ping")
    .setDescription("pong!")
];

// Register command
const rest = new REST( { version: '9' }).setToken(config.DISCORD_TOKEN)

// Call put function to register command
rest.put(Routes.applicationGuildCommands(config.CLIENT_ID, config.GUILD_ID), {body: commands})
.then( () => {
    console.log("Successfully registered application commands")
}).catch(console.error)

// Now call applicationGuildCommands register thing
// Create new script in package.json "deploy:commands": "tsc && node build/deploy-commands.js"