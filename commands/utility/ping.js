const discord = require('discord.js')



module.exports.run = async (Client, message, args, prefix) => {
    var yourping = new Date().getTime() - message.createdTimestamp
    var botping = Math.round(Client.ws.ping)

    message.channel.send(`š: \`${yourping}ms\` \nš¤: \`${botping}ms\``)
}

module.exports.help = {
    name: "ping",
    aliases: []
}