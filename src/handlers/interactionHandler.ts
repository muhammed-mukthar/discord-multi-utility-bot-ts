import { Client, Interaction } from 'discord.js';
import { handleCommand } from './commandHandler';

export async function handleInteraction(client: Client, interaction: Interaction) {
  if (!interaction.isCommand()) return;

  try {
    await handleCommand(interaction);
  } catch (error) {
    console.error('Error handling interaction:', error);
    interaction.reply('An error occurred while processing your command.');
  }
}
