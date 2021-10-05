const Client = require('../index').Client
const { createCmd } = require('../dataHandler')
Client.on('ready', async () => {
    Client.user.setPresence({ activities: [{ name: "ur mom", type: "WATCHING"}] })
    console.log('\x1b[32m%s\x1b[0m', `!! ${Client.user.tag} is now online ✅ !!`)

    createCmd(Client, '894786498556203088')
})