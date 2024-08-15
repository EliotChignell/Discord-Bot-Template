// Libraries
const { Events } = require('discord.js');

// Utils
const register_commands = require('../utils/discord/register_commands');

module.exports = {
    name: Events.GuildCreate,
    once: false,
    execute: async (guild) => {
        await register_commands(guild.client, [guild.id]);
    }
};
