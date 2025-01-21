import { Client, GuildMember, TextChannel, Role, EmbedBuilder } from 'discord.js';

export const handleGuildMemberAdd = async (client: Client, member: GuildMember): Promise<void> => {
  try {
    // Ensure the channel is a TextChannel before sending a message
    const welcomeChannel = member.guild.channels.cache.find(
      (channel) => channel.name === 'welcome' && channel instanceof TextChannel
    );

    if (welcomeChannel) {
      const embed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('Welcome!')
        .setDescription(`Welcome to the server, ${member.user.username}! 🎉`)
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp();

      // Now we can safely call send() on the TextChannel
      await (welcomeChannel as TextChannel).send({ embeds: [embed] });
    } else {
      console.log('Welcome channel not found or not a valid text channel.');
    }

    // Assign the 'Member' role to the new user
    const memberRole = member.guild.roles.cache.find(
      (role) => role.name === 'Member' && role instanceof Role
    );

    if (memberRole) {
      await member.roles.add(memberRole);
      console.log(`Assigned 'Member' role to ${member.user.username}`);
    } else {
      console.log('Role "Member" not found');
    }
  } catch (error) {
    console.error('Error handling guildMemberAdd:', error);
  }
};
