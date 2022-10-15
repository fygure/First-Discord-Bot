import { SlashCommandBuilder } from "@discordjs/builders"
import { CommandInteraction, Interaction } from "discord.js"

export const data = new SlashCommandBuilder()
                    .setName("ping")
                    .setDescription("pong")

export async function execute(interaction: CommandInteraction) {
    return interaction.reply("Pong!")
}