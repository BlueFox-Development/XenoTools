module.exports = (client, guild) => {
    global.logger.info(`Joined guild: ${guild.name} (${guild.id}) with ${guild.memberCount} members`);
    client.user.setActivity(`${client.guilds.cache.size} guilds`, { type: 'WATCHING' });
}