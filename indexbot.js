const Discord = require('discord.js');
const { prefix, token } = require('./botconfig.json');
const botconfig = require ('./botconfig.json')
const client = new Discord.Client();  
const https = require ('https');
const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100'
const fetch = require('node-fetch')
const moment = require('moment')
const fs = require("fs");
const prefixes = require('./prefixes.json');


client.on('ready', () => {
    console.log(`[✅] Bot is online! ${client.user.tag}`);
    setInterval(function() {
        let totalservers = client.guilds.cache.size;
        let totalchannels = client.channels.cache.size;

        let botStatus = [        
            `${prefix}help | ${virgule(totalservers)} servers!`,
            `${prefix}help | ${virgule(client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0))} users!`,
            `${prefix}help | ${virgule(totalchannels)} channels!`,
        ]

      let status = botStatus[Math.floor(Math.random() * botStatus.length)];
      client.user.setActivity(status, {type: "LISTENING"});
  
      }, 5000)
  
      client.user.setStatus("online"); 
});

client.on('guildCreate', guild =>{
    console.log(`%c[📯] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  ➔  +1 : ${guild.name} | ${guild.memberCount} members`,`color : #DCD50D`)
    let onlines = guild.members.cache.filter(({
        presence
    }) => presence.status !== 'offline').size;
    const embed = new Discord.MessageEmbed() 
            .setTitle('🔔 | **NEW SERVER**')
            .setDescription(`● **${guild.name}** has just invited Dumbot to its community!`)
			.setColor(15844367)
			.setThumbnail(guild.iconURL({ format: 'png' }))
			.addField('❯ Name', `\`\`\`${guild.name}\`\`\``, true)
			.addField('❯ Region', `\`\`\`${guild.region.toUpperCase()}\`\`\``, true)
            .addField('❯ Members', `\`\`\`${guild.memberCount}\`\`\``, true)
    client.channels.cache.get('...').send(embed) 
})
client.on('guildDelete', guild =>{
    console.log(`%c[👋🏼] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  ➔  SERVEUR PERDU : ${guild.name}`,`color : #FF0000`)
})


client.on("message", async message => {
    var ui 
    var mp = Math.round(Math.random() * 10);
    if (mp==0) ui = ("My mom told me not to talk to strangers...")
    if (mp==1) ui = ("You look great, but I don't talk to strangers!")
    if (mp==2) ui = ("You're scaring me, go away! ")
    if (mp==3) ui = ("I am not allowed to answer you.")
    if (mp==4) ui = ("I am outraged by what you said! ._.")
    if (mp==5) ui = ("How dare you talk to me?")
    if (mp==6) ui = ("I love you, but our love must remain a secret...")
    if (mp==7) ui = ("My creator would be delighted ^^")
    if (mp==8) ui = ("Don't hesitate to invite me on all your servers! ")
    if (mp==9) ui = ("It's nice outside, tell me.")
    if (mp==10) ui = (" 🤩 ")
    if (message.author.bot) return;
    var dm = Math.round(Math.random() * 5);
    if (message.channel.type === "dm") return message.reply(`${ui}`).then(    console.log(`%c[🔒] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id})  ➜  Private Message`,`color : #E1120C`));
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if (!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: (botconfig).prefix
        };
    }
    let prefix = prefixes[message.guild.id].prefixes;
    if (!message.content.startsWith(prefix)) return;
    let commandfile =
      client.commands.get(cmd.slice(prefix.length)) ||
      client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
    if (commandfile) commandfile.run(client, message, args);
  
    });
    
    

    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
  
    fs.readdir("./commands/", (err, files) => {
  
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    
    if (jsfile.length <= 0) {
      return console.log("[LOGS] Couldn't Find Commands !");
    }
  
    jsfile.forEach((f, i) => {
        console.log(`[📫] Command loaded ${f}`);
  
        let pull = require(`./commands/${f}`);
        client.commands.set(pull.config.name, pull);
  
        pull.config.aliases.forEach(alias => {
  
            client.aliases.set(alias, pull.config.name);
     
        });
    });
});

function virgule(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
}


client.login(token);
