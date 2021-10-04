module.exports = async (client, guild) => {
    global.logger.info(`Joined guild: ${guild.name} (${guild.id}) with ${guild.memberCount} members`);
    client.user.setActivity(`${client.guilds.cache.size} guilds | ${client.commands.length} commands`, { type: 'WATCHING' });
}