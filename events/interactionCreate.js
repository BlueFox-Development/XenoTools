const chalk = require('chalk');

module.exports = async (client, interaction) => {

    if (!interaction.isCommand()) return;
	let options = interaction.options._hoistedOptions.map(o => `${o.name}: ${o.value}`);
	global.logger.info(`User: ${interaction.user.username}#${interaction.user.discriminator} (${interaction.user.id}) used the ${interaction.commandName} command with these options: [${options}]`);

	const command = client.commands.get(interaction.commandName);
	if (!command) return;

	try {
		await command.execute(client, interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}

}