// Libraries
const fs = require('fs');
const path = require('path');

/**
 * Adds the relevant events to the client from the src/events folder
 * @param client a Discord client
 */
function add_event_listeners(client) {
    const events_path = path.join(__dirname, '..', '..', 'events');
    const event_files = fs.readdirSync(events_path)
        .filter(file => file.endsWith('.js'));

    for (const file of event_files) {
        const file_path = path.join(events_path, file);
        const event = require(file_path);

        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    }
}

module.exports = add_event_listeners;
