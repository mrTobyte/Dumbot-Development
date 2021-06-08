const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    message.channel.send({embed: {
        color: 2123412,
        description: ("**𝗛𝗲𝗿𝗲 𝗶𝘀 𝘁𝗵𝗲 𝗹𝗶𝗻𝗸 𝘁𝗼 𝘃𝗼𝘁𝗲 𝗳𝗼𝗿 𝗗𝘂𝗺𝗯𝗼𝘁 𝗼𝗻 𝘁𝗵𝗲 𝗳𝗼𝗹𝗹𝗼𝘄𝗶𝗻𝗴 𝘀𝗶𝘁𝗲𝘀:**\n**📎|𝗟𝗶𝗻𝗸s** :\n \n● [__**top.gg**__](https://top.gg/bot/786972690405523518)\n● [**motiondevelopment.top**](https://www.motiondevelopment.top/bots/786972690405523518)"),
        footer: {
            icon_url: client.user.avatarURL(),
            text: "Thank you very much for your support!"
        }
    }});
    console.log(`%c[🔔] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}vote`,`color : #DCB90E`)
}

module.exports.config = {
    name: "vote", 
    aliases: ["𝘃𝗼𝘁𝗲"]
}