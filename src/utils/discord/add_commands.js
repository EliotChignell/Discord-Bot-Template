// Libraries
const { Client, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

// Utils
const get_all_filenames = require('../other/get_all_filenames');

/**
 * Adds all commands to client.commands
 * @param {Client} client
 */
function add_commands(client) {
    client.commands = new Collection();

    const commands_path = path.join(__dirname, '..', '..', 'commands');

    const all_files = get_all_filenames(commands_path)
        .filter(file_path => file_path.endsWith('.js') && !file_path.endsWith('template.js'));

    for (const file_path of all_files) {
        // Clearing cache so we have latest version of file
        delete require.cache[require.resolve(file_path)];
        const command = require(file_path);

        if (!command?.data) continue;

        // Getting category from directory after commands
        command.category = file_path.split('/')[file_path.split('/').indexOf('commands') + 1];

        client.commands.set(command.data.name, command);
    }
}

module.exports = add_commands;
