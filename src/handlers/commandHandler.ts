import { CommandInteraction } from 'discord.js';
import { executeKickCommand } from '../commands/kick';

export async function handleCommand(interaction: CommandInteraction) {
    console.log('i am inside',interaction.commandName)

  if (interaction.commandName === 'kicking') {
    await executeKickCommand(interaction);
  }


}
