# Discord-Bot-Template
A basic template/framework for writing a Discord bot in Node.js.
This is the basic structure behind my bots [BasketballBot](https://chig.js.org/BasketballBot) and [FootballBot](https://chig.js.org/FootballBot).

## Setup
1. Clone the reposity either by:
- GitHub CLI: `git clone https://github.com/EliotChignell/Discord-Bot-Template.git`
- Downloading the code: [https://github.com/EliotChignell/Discord-Bot-Template/archive/refs/heads/main.zip](https://github.com/EliotChignell/Discord-Bot-Template/archive/refs/heads/main.zip)
2. Go to [discord.dev](https://discord.dev) and create a Discord bot.
3. Get your bot's token and client ID and insert them into `config.example.json`
4. Rename `config.example.json` to `config.json`
5. Run `npm start` from the project root directory.
6. Add your bot to a server, and if the command(s) do not automatically update, type `@YourBot update` in Discord (in a channel with the bot).

## How can I learn more about creating a Discord bot?
I would recommend [discordjs.guide](https://discordjs.guide/).
