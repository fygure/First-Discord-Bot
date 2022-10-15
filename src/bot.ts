// Code for the bot

import { Client } from "discord.js"
import config from "./config"


// Define new instance of the client to use in REST API
// intents - permissions that the bot requires
export const client = new Client({ 
    intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] 
});


// Event listener
client.once("ready", () => {
    console.log("Discord bot ready!");
});

// Event listener
// Register the ping command -> create a new file deploy-commands.ts
client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()){
        return
    }
    const { commandName } = interaction;
    if (commandName == 'ping') {
        return interaction.reply("pong!!")
    }
    if (commandName == 'swag') {
        return interaction.reply("balls!!")
    }
})

client.login(config.DISCORD_TOKEN)