module.exports.run = async (inter) => {
    return await inter.reply({ content: '🏓 Pong! To see your actual ping, please use the bot\'s actual prefix: `;`' });
}

module.exports.help = {
    name: "ping",
    memberPermissions: []
}