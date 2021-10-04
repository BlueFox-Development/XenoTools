const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mcserver')
        .setDescription('Displays information about a minecraft server')
        .addStringOption(option => option.setName('host').setDescription('Server\'s Host').setRequired(true)),
    async execute(client, interaction) {
        const host = interaction.options.getString('host')

        axios.get('https://api.mcsrvstat.us/2/' + host)
            .then(function (response) {
                let { data } = response;
                if (!data.online) {
                    return interaction.reply({ 
                        embeds: [
                            new MessageEmbed()
                                .setTitle('Server is offline!')
                                .setColor('RED')
                        ]
                    });
                }

                interaction.reply({ 
                    embeds: [
                        new MessageEmbed()
                            .setTitle(host)
                            .addFields([
                                { name: 'IP', value: String(data?.ip || 'unknown'), inline: true },
                                { name: 'Port', value: String(data?.port || 'unknown'), inline: true },
                                { name: 'Players', value: `${String(data?.players?.online || 'unknown')}/${String(data?.players?.max || 'unknown')}`, inline: true },
                                { name: 'Version', value: String(data?.version || 'unknown'), inline: true },
                                { name: 'Protocol', value: String(data?.protocol), inline: true },
                                { name: 'MOTD', value: `\`\`\`${data?.motd?.clean[0] || ''}\n${data?.motd?.clean[1] || ''}\`\`\``, inline: false }
                            ])
                            .setColor('AQUA')
                            .setFooter('Hosted by BlueFoxHost.com')
                    ]
                });
            })
            .catch(function (error) {
                console.error(error)
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