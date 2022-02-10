const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('credits')
        .setDescription('Shows the bot\'s credits'),
    async execute(client, interaction) {
        await interaction.reply({ 
            embeds: [
                new MessageEmbed()
                    .setTitle('Credits')
                    .setDescription('XenoTools is opensource on [GitHub](https://github.com/FlaringPhoenix/XenoTools)!')
                    .addFields([
                        { name: 'FlaringPhoenix#0001', value: '[GitHub](https://github.com/FlaringPhoenix) - [Twitter](https://twitter.com/phoenix_flaring)' },
                        { name: 'DIBSTER#2317', value: '[GitHub](https://github.com/DIBSTERYT)' }
                    ])
                    .setColor('GREEN')
            ]
        });
    },
};