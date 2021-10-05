module.exports = (client, guild) => {
    global.logger.info(`Left guild: ${guild.name} (${guild.id}) with ${guild.memberCount} members`);
    client.user.setActivity(`${client.guilds.cache.size} guilds`, { type: 'WATCHING' });
}