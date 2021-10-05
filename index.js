require('dotenv').config();

const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');
const winston = require('winston');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Deploy Slash Commands
require('./deploy');

// Logging
global.logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
      new winston.transports.Console()
    ],
});

// Event handler
fs.readdir('./events/', (err, files) => {
    if (err) throw err
    for (const file of files) {
        if (!file.endsWith('.js')) continue;
        let event = require('./events/' + file);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve('./events/' + file)];
    }
});

// Command handler
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.login(process.env.TOKEN);