const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ip')
        .setDescription('Check information regarding a specific IP address')
        .addStringOption(option => option.setName('host').setDescription('The IP address')),
    async execute(client, interaction) {
        const target = interaction.options.getString('host') || '';

        axios.get('http://ip-api.com/json/' + target)
            .then(function (response) {
                let { data } = response;
                interaction.reply({ 
                    embeds: [
                        new MessageEmbed()
                            .setTitle(target || 'me')
                            .addFields([
                                { name: 'Country', value: `${data.country || 'unknown'} (${data.countryCode || 'unknown'})`, inline: true },
                                { name: 'Region', value: `${data.regionName || 'unknown'} (${data.region || 'unknown'})`, inline: true },
                                { name: 'City', value: String(data?.city || 'unknown'), inline: true },
                                { name: 'Zipcode', value: String(data?.zip || 'unknown'), inline: true },
                                { name: 'Latitude', value: String(data.lat || 'unknown'), inline: true },
                                { name: 'Longitude', value: String(data.lon || 'unknown'), inline: true },
                                { name: 'Timezone', value: String(data?.timezone || 'unknown'), inline: true },
                                { name: 'ISP', value: String(data?.isp || 'unknown'), inline: true },
                                { name: 'ORG', value: String(data?.org || 'unknown'), inline: true },
                                { name: 'AS', value: String(data?.as || 'unknown'), inline: true }

                            ])
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
    },
};