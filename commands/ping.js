const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const ping = require('ping');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pings the given IP')
        .addStringOption(option => option.setName('host').setDescription('The IP address').setRequired(true)),
    async execute(client, interaction) {
        const target = interaction.options.getString('host');

        ping.promise.probe(target, {
            timeout: 1,
            extra: [],
        })
        .then(function (res) {
            interaction.reply({ 
                embeds: [
                    new MessageEmbed()
                        .setTitle(target)
                        .setDescription(`Latency: ${res?.avg}ms\n\`\`\`${res?.output}\`\`\``)
                        .setColor('AQUA')
                        .setFooter('Hosted by BlueFoxHost.com')
                ]
            });
        })
        .catch(function (error) {
            interaction.reply({ 
                embeds: [
                    new MessageEmbed()
                        .setTitle('An error has occured!')
                        .setColor('RED')
                ]
            });
        })
    }
};