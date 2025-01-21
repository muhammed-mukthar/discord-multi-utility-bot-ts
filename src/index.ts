import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';
import { handleGuildMemberAdd } from './events/guildMemberAdd';

// Load environment variables
dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
  ],
});


// Event listeners
client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});


client.on('guildMemberAdd',(member)=>{
    handleGuildMemberAdd(client,member)
})
// Log in
client.login(process.env.DISCORD_TOKEN);
