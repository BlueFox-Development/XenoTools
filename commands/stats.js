const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { getReadableTime } = require('quick-ms');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stats')
        .setDescription('Shows unique stats about the bot'),
    async execute(client, interaction) {
        await interaction.reply({ 
            embeds: [
                new MessageEmbed()
                    .setTitle('Statistics')
                    .setDescription(`[Click-Here](https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=8&scope=bot%20applications.commands) to invite me!`)
                    .addFields([
                        { name: 'Project', value: `Uptime: ${getReadableTime(client.uptime)}\nVersion: v${require('../package.json')['version']}`},
                        { name: 'Discord', value: `Ping: ${client.ws.ping}ms\nGuilds: ${String(client.guilds.cache.size)}\nUsers: ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}\nChannels: ${client.guilds.cache.reduce((a, g) => a + g.channels.cache.size, 0)}`, inline: true }
                    ])
                    .setColor('GREEN')
                    .setFooter('Hosted by BlueFoxHost.com')
            ]
        });
    },
};
