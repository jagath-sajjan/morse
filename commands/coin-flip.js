const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('coin-flip')
        .setDescription('Flip a coin'),
    name: 'coin-flip',// Add this line
    description: 'Flip a coin',
    async execute(interaction) {
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
        
        const embed = new EmbedBuilder()
            .setTitle('Coin Flip Result')
            .setDescription(`The coin landed on: **${result}**`)
            .setColor('Random')
            .setFooter({ text: 'HackSaw Coin-Flip API', iconURL: interaction.client.user.displayAvatarURL() });

        await interaction.reply({ embeds: [embed] });
    },
};
