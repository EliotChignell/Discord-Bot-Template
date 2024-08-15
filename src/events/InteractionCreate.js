// Libraries
const { Events } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    once: false,
    execute: async (interaction) => {
        // Only for slash commands
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) {
            console.log(`No command with name "${interaction.commandName}" was found.`);
            return;
        }

        try {
            await command.execute({ interaction });
        } catch (error) {
            console.error(error);

            await respond(
                interaction,
                {
                    content: 'There was an error while executing this command!',
                    ephemeral: true
                }
            );
        }
    }
};
