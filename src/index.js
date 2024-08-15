// Libraries
const { ShardingManager, ShardEvents } = require('discord.js');
const path = require('path');

// Assets
const config = require('./config.json');

// Spawning shards
const bot_file_path = path.join(__dirname, 'bot.js');

const manager = new ShardingManager(bot_file_path, {
    token: config.bot.token
});
manager.spawn();

manager.on('shardCreate', (shard) => {
    shard.on(ShardEvents.Error, error => {
        console.error(error);
    });
});
