const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { CLIENT_ID, TOKEN } = process.env;

require('./deploy-commands.js');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(TOKEN);

rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands })
	.then(() => console.log('Successfully registered ' + commands.length + ' application commands.'))
	.catch(console.error);

rest.put(Routes.applicationGuildCommands(CLIENT_ID, '704423873415741510'), { body: commands })
	.then(() => console.log('Successfully registered ' + commands.length + ' application commands.'))
	.catch(console.error);