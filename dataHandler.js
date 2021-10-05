async function createCmd(Client, guildId) {
    const data = [

        {
            name: 'echo',
            description: 'Echo text.',
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
            description: 'Shows your ping and client\'s ping.'
        },
        {
            name: 'purge',
            description: 'Remove up to 300 messages in a channel.',
            options: [{
                name: "amount",
                type: "NUMBER",
                description: "Amount of messages you want to purge. (Up to 300 only)",
                required: true
            }]
        }



    ]

    await Client.guilds.cache.get(guildId)?.commands.set(data);
}

module.exports = { createCmd }