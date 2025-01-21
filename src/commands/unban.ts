import { CommandInteraction } from "discord.js";

export async function executeUnBanCommand(interaction: CommandInteraction) {
  // Check if the interaction is a command interaction
  if (!interaction.isChatInputCommand()) {
    return;
  }

  // Retrieve the 'target' user option
  const targetUser = interaction.options.getUser('target');

  if (!targetUser) {
    await interaction.reply('Please mention a valid user to unban.');
    return;
  }

  try {
    // Check if the user is banned
    const ban = await interaction.guild?.bans.fetch(targetUser.id);

    if (!ban) {
      await interaction.reply(`${targetUser.tag} is not banned.`);
      return;
    }

    // Attempt to unban the user
    await interaction.guild?.bans.remove(targetUser.id);
    await interaction.reply(`${targetUser.tag} has been unbanned.`);
  } catch (error) {
    // Handle error if user is not found in the ban list or other issues
    if (error instanceof Error && error.message.includes('Unknown Ban')) {
      await interaction.reply(`${targetUser.tag} is not banned.`);
    } else {
      console.error(error);
      await interaction.reply('An error occurred while trying to unban the user.');
    }
  }
}
