import * as dotenv from 'dotenv';
dotenv.config()
// Load environment variables
dotenv.config();export const config = {
    token:process.env.DISCORD_TOKEN,
    clientId:process.env.APPLICATION_ID, // Bot's Client ID
    guildId:process.env.SERVER_ID, // Guild where commands will be registered
  };
  