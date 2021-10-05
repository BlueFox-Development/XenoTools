const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Shows you how to invite the bot'),
    async execute(client, interaction) {
        await interaction.reply({ 
            embeds: [
                new MessageEmbed()
                    .setTitle('Invite me!')
                    .setDescription(`[Click-Here](${process.env.INVITE}) to invite me!`)
                    .setColor('GREEN')
            ]
        });
    },
};