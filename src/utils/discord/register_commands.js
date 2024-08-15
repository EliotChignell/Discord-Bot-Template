// Libraries
const { Routes, REST } = require('discord.js');

// Assets
const config = require('../../config.json');

// Utils
const add_commands = require('./add_commands');
const format_commands = require('./format_commands');

async function register_commands(client, guild_ids) {
    // Updating commands, maybe unnecessary
    add_commands(client);

    const commands = format_commands(client);
    const rest = new REST({ version: '9' })
        .setToken(config.bot.token);

    for (let i = 0; i < guild_ids.length; i++) {
        await rest.put(
            Routes.applicationGuildCommands(
                config.bot.client_id,
                guild_ids[i]
            ),
            {
                body: commands
            }
        ).catch(error => {});
    }

    if (guild_ids.length > 1) {
        console.log(`${guild_ids.length} guild commands updated`);
    }
}

module.exports = register_commands;
