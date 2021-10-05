module.exports = async (client) => {
    client.user.setActivity(`${client.guilds.cache.size} guilds | ${client.commands.size} commands`, { type: 'WATCHING' });
    global.logger.info('XenoTools is online!');
}