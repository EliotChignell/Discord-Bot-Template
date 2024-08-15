/**
 * Formats the commands for registering with Discord API
 * @param {*} client
 */
function format_commands(client) {
    return Array.from(client.commands)
        .filter(cmd => !cmd[1].hidden)
        .map(cmd => cmd[1].data.toJSON());
}

module.exports = format_commands;
