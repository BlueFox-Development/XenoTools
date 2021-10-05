module.exports = async (client, interaction) => {
    if (!interaction.isCommand()) return;
	let options = interaction.options._hoistedOptions.map(o => `${o.name}: ${o.value}`);
	global.logger.info(`User: ${interaction.user.username}#${interaction.user.discriminator} (${interaction.user.id}) used the ${interaction.commandName} command with these options: [${options}] in guild: ${interaction.guild.name} (${interaction.guild.id})`);

	const command = client.commands.get(interaction.commandName);
	if (!command) return;

	try {
		await command.execute(client, interaction);
	} catch (error) {
		global.logger.error(error);
		return interaction.reply({
			embeds: [
				new MessageEmbed()
					.setTitle('An error has occured!')
					.setColor('RED')
			]
		});
	}
}