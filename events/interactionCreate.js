const Client = require('../index').Client
Client.on('interactionCreate', async inter => {
    if(inter.isCommand()) {
        let slashCmds = Client.SlashCmds.get(inter.commandName)
        if(!inter.member.permissions.has(slashCmds.help.memberPermissions)) return
        if(slashCmds) slashCmds.run(inter)
    }
})