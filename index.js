const discord = require('discord.js')
const fs = require('fs')
const { token } = require('./config.json')
const Client = new discord.Client({
    intents: [ discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MEMBERS, discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.DIRECT_MESSAGES ],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true }
})

Client.commands = new discord.Collection();
Client.aliases = new discord.Collection();
Client.events = new discord.Collection();
Client.SlashCmds = new discord.Collection();
module.exports.Client = Client 



// get into the cmds folder
fs.readdirSync('./commands/').forEach(dir => {
    fs.readdir(`./commands/${dir}`, (err, files) => {
        if (err) throw err;
        var jsFiles = files.filter(f => f.split(".").pop() === "js");
        if (jsFiles.length <= 0) return console.log('\x1b[31m%s\x1b[0m', "[CMD ERR] - Can't find any commands!");
        
        jsFiles.forEach(file => {
            var fileGet = require(`./commands/${dir}/${file}`);
            console.log('\x1b[33m%s\x1b[0m', `[CMD] - File ${file} loaded`)

            try {
                Client.commands.set(fileGet.help.name, fileGet);

                fileGet.help.aliases.forEach(alias => {
                    Client.aliases.set(alias, fileGet.help.name);
                })

            } catch (err) {
                return console.log(err);
            }
        });
    });
});

// Event Handler
fs.readdirSync('./events/').forEach(file => {
    var jsFiles = fs.readdirSync('./events/').filter(f => f.split(".").pop() === "js");
    if (jsFiles.length <= 0) return console.log('\x1b[31m%s\x1b[0m', "[EVENT ERR] - Can't find any events!");
    
    jsFiles.forEach(event => {
        const eventGet = require(`./events/${event}`)
        let check = false
        try {
            if(check == false) {
                console.log('\x1b[34m%s\x1b[0m', `[EVENT] - File ${event} loaded`)
                check = true
            }
            Client.events.set(eventGet.name, eventGet)
        } catch(error) {
            return console.log(error)
        }
    });
});

// slash cmds
fs.readdirSync('./SlashCommands/').forEach(dir => {
    fs.readdir(`./SlashCommands/${dir}`, (err, files) => {
        if (err) throw err;
        var jsFiles = files.filter(f => f.split(".").pop() === "js");
        if (jsFiles.length <= 0) return console.log('\x1b[31m%s\x1b[0m', "[SLASH ERR] - Can't find any commands!");
        
        jsFiles.forEach(file => {
            var fileGet = require(`./SlashCommands/${dir}/${file}`);
            console.log('\x1b[33m%s\x1b[0m', `[SLASH] - File ${file} loaded`)

            try {
                Client.SlashCmds.set(fileGet.help.name, fileGet);
            } catch (err) {
                return console.log(err);
            }
        });
    });
});

Client.login(token)
