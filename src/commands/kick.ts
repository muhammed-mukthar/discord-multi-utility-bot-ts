import { CommandInteraction, GuildMember } from 'discord.js';

export async function executeKickCommand(interaction: CommandInteraction) {
  // Check if the interaction is a command interaction
  if (!interaction.isChatInputCommand()) {
    return;
  }

  // Retrieve the 'target' user option
  const targetUser = interaction.options.getUser('target');

  if (!targetUser) {
    await interaction.reply('Please mention a valid user to kick.');
    return;
  }

  // Fetch the member from the guild
  const targetMember = await interaction.guild?.members.fetch(targetUser.id);

  if (!targetMember) {
    await interaction.reply('Could not find the user in the server.');
    return;
  }

  try {
    await targetMember.kick();
    await interaction.reply(`${targetMember.user.tag} has been kicked.`);
  } catch (error) {
    await interaction.reply('An error occurred while trying to kick the user.');
  }
}
