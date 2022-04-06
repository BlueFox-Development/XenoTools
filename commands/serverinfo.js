const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Displays the current server\'s information'),
    async execute(client, interaction) {
        const target = interaction.guild;

        interaction.reply({ 
            embeds: [
                new MessageEmbed()
                    .setTitle(`${target?.name} | ${target?.id}`)
                    .addFields([
                        { name: 'Description', value: String(target.description), inline: true },
                        { name: 'Graphics', value: `[Icon](https://cdn.discordapp.com/icons/${target.id}/${target.icon}.webp?size=96)`, inline: true },
                        { name: 'Vanity', value: String(target.vanityURLCode || 'none'), inline: true },
                        { name: 'Members', value: `${target.memberCount}/${target.maximumMembers}`, inline: true },
                        { name: 'Nitro Boosts', value: String(target.premiumSubscriptionCount), inline: true },
                        { name: 'Created', value: `<t:${Math.round(target?.createdTimestamp/1000)}:F>`}
                    ])
                    .setColor('AQUA')
                    .setFooter('Hosted by BlueFoxHost.com')
            ]
        });

    },
};
