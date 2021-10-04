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
                    .setDescription(`[Click-Here](https://discord.com/api/oauth2/authorize?client_id=894358851032317953&permissions=3147776&scope=bot%20applications.commands) to invite me!`)
                    .setColor('GREEN')
            ]
        });
    },
};