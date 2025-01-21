
# Discord Bot (TypeScript)

A feature-rich, modular Discord bot built using **TypeScript** and **discord.js**. This bot provides various utilities such as automated welcome messages, moderation commands (kick/ban), reaction roles, fun commands (jokes), and message logging. The bot is fully customizable and scalable, making it ideal for learning and building more complex bots.

## Features

- **Welcome System:** Sends welcome messages and assigns default roles when users join.
- **Moderation Tools:** Includes commands for kicking and banning users.
- **Reaction Roles:** Assign roles to users based on emoji reactions.
- **Fun Commands:** Fetches jokes or fun facts.
- **Message Logging:** Logs message edits and deletions to a specific channel.

## Installation

Follow these steps to get your bot up and running:

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/discord-bot-typescript.git
cd discord-bot-typescript
```

### 2. Install Dependencies
Install all the required packages with npm:
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root of the project and add your bot token:
```env
DISCORD_TOKEN=your-bot-token
```

### 4. Compile TypeScript
To compile your TypeScript code, run:
```bash
npx tsc
```

### 5. Run the Bot
Once compiled, you can run your bot:
```bash
npx ts-node src/index.ts
```

### 6. Add the Bot to Your Server
- Go to the [Discord Developer Portal](https://discord.com/developers/applications).
- Select your bot and copy the OAuth2 URL with appropriate permissions (e.g., Administrator or custom permissions).
- Paste the URL in your browser and invite the bot to your server.

## Commands

### **Moderation Commands**
- `/kicking @user` - Kicks the specified user from the server.
- `/baning @user` - Bans the specified user from the server.
- `/unban @user` - Bans the specified user from the server.


### **Fun Commands**
- `!joke` - Fetches a random joke.

### **Reaction Roles**
- React to a message with the "👍" emoji to get a role.

### **Logging**
- The bot automatically logs message edits and deletions to the `logs` channel.

## Contributing

If you'd like to contribute to this bot, feel free to open issues or submit pull requests. Contributions are always welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Built with:
- [discord.js](https://discord.js.org) - The library for interacting with the Discord API.
- [TypeScript](https://www.typescriptlang.org) - A strongly typed programming language that builds on JavaScript.
