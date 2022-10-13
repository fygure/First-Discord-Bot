// Centralized place that verifies no missing env variables
// Provides convenient way to load them from other modules

import dotenv from "dotenv"
dotenv.config()
const { CLIENT_ID, GUILD_ID, DISCORD_TOKEN } = process.env;

// Verify loading of env variables
if (!CLIENT_ID || !GUILD_ID || !DISCORD_TOKEN) {
    throw new Error("Missing environment variables")
}

// Store env variables
const config : Record<string, string> = {
    CLIENT_ID,
    GUILD_ID,
    DISCORD_TOKEN
}

export default config