module.exports = async (client) => {
    client.user.setActivity('just started!', { type: 'PLAYING' });

    setTimeout(function() {
        client.user.setActivity(`${client.guilds.cache.size} guilds`, { type: 'WATCHING' });
    }, 60 * 1000);

    global.logger.info('XenoTools is online!');
}
