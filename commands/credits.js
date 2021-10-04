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
                        { name: 'FlaringPhoenix#0001', value: 'Founder, Head Developer\n[GitHub](https://github.com/FlaringPhoenix) - [Twitter](https://twitter.com/phoenix_flaring)' },
                        { name: 'physxx#4326', value: 'Network Engineer\n[Twitch](https://www.twitch.tv/physx_x_x) - [Twitter](https://twitter.com/Xx_physx_xX)'}
                    ])
                    .setColor('GREEN')
            ]
        });
    },
};