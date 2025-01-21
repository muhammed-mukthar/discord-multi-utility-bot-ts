import { CommandInteraction } from 'discord.js';
import { executeKickCommand } from '../commands/kick';
import { executeBanCommand } from '../commands/ban';
import { executeUnBanCommand } from '../commands/unban';

export async function handleCommand(interaction: CommandInteraction) {
    console.log('i am inside',interaction.commandName)

  if (interaction.commandName === 'kicking') {
    await executeKickCommand(interaction);
  }
  if (interaction.commandName === 'baning') {
    await executeBanCommand(interaction);
  }
  if (interaction.commandName === 'unban') {
    await executeUnBanCommand(interaction);
  }
}
