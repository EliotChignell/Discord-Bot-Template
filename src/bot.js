// Libraries
const { Client, GatewayIntentBits } = require('discord.js');

// Assets
const config = require('./config.json');

// Utils
const add_event_listeners = require('./utils/discord/add_event_listeners');
const add_commands = require('./utils/discord/add_commands');

// Setting up client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

add_event_listeners(client);
add_commands(client);

client.login(config.bot.token);
