// Libraries
const { SlashCommandBuilder } = require('discord.js');

// Utils
const respond = require('../utils/discord/respond');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pong!'),

    execute: async (variables) => {
        const { interaction } = variables;

        return await respond(
            interaction,
            'Pong!'
        );
    }
};
