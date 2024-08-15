// Libraries
const { Events } = require('discord.js');

// Assets
const config = require('../config.json');

// Utils
const register_commands = require('../utils/discord/register_commands');

module.exports = {
    name: Events.MessageCreate,
    once: false,
    execute: async (message) => {
        if (!message.content || !message.content.startsWith(`<@${config.bot.client_id}>`)) return;

        const args = message.content.split(' ');
        args.shift(); // Remove <@> mention
        const command = args.shift().toLowerCase();

        // Filtering out non-admins, except if they are just updating
        if (!config.defaults.admins.includes(message.author.id) || command != 'update') return;

        switch (command) {
            case 'update': {
                await register_commands(message.client.commands, [message.guild.id]);
                return await message.channel.send('Updated!');
            }
        }
    }
};
