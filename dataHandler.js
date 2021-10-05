async function createCmd(Client, guildId) {
    const data = [

        {
            name: 'echo',
            description: 'Echo',
            options: [{
                name: "text",
                type: "STRING",
                description: "The text to echo back",
                required: true,
            }],
        },

        //ping
        {
            name: 'ping',
            description: 'Shows your ping and client\'s ping'
        },
        {
            name: ''
        }



    ]

    await Client.guilds.cache.get(guildId)?.commands.set(data);
}

module.exports = { createCmd }