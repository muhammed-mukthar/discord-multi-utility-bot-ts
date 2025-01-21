import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { config } from "./config";

if (!config.token || !config.clientId || !config.guildId) {
  throw new Error("environment variables not set");
}
const commands = [
  new SlashCommandBuilder()
    .setName("kicking")
    .setDescription("Kick a user from the server")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to kick")
        .setRequired(true)
    ),
  new SlashCommandBuilder()
    .setName("baning")
    .setDescription("Ban a user from the server")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to ban")
        .setRequired(true)
    ),
  new SlashCommandBuilder()
    .setName("unban")
    .setDescription("Un Ban a user from the server")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to un ban")
        .setRequired(true)
    ),
].map((command) => command.toJSON());

const rest = new REST({ version: "9" }).setToken(config.token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationGuildCommands(
        config.clientId as string,
        config.guildId as string
      ),
      { body: commands }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
