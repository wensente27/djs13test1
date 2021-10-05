const { MessageActionRow } = require("discord.js")

module.exports.run = async (inter) => {
    let amount = inter.options.getNumber('amount')
    if(amount <= 100) {
        inter.channel.bulkDelete(amount, true)
        return await inter.reply(`Successfully purged **\`${amount}\`** messages.`)
    }
    
}

module.exports.help = {
    name: 'purge'
}