/**
 * Either creates or updates a reply to an interaction
 */
async function respond(interaction, content) {
    if (typeof content === 'string') {
        content = {
            content,
            embeds: [],
            components: []
        }
    }

    // Clears embeds and components from message if not specified
    if (!content.embeds) content.embeds = [];
    if (!content.components) content.components = [];

    // Either creates/updates an interaction response depending on the type of interaction
    if (interaction.isChatInputCommand()) {
        // For message-based interactions (e.g., slash commands)
        if (interaction.deferred || interaction.replied) {
            await interaction.editReply(content);
        } else {
            await interaction.reply(content);
        }
    } else if (interaction.isButton() || interaction.isSelectMenu()) {
        // For component interactions (e.g., buttons, select menus)
        await interaction.update(content);
    }
}

module.exports = respond;
