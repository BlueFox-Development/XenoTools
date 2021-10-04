const chalk = require('chalk');

module.exports = async (client) => {
    console.log(chalk.green('Ready!'));
    client.user.setActivity(`${client.guilds.cache.size} guilds | ${client.commands.size} commands`, { type: 'WATCHING' });
    global.logger.info(`Bot has started!`);
}