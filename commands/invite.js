const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    message.channel.send({embed: {
        color: 2123412,
        description: ("**𝗜𝗻𝘃𝗶𝘁𝗮𝘁𝗶𝗼𝗻 𝗹𝗶𝗻𝗸 𝗼𝗳 𝘁𝗵𝗲 ✨𝗗𝗨𝗠𝗕𝗢𝗧✨**\n**𝗟𝗶𝗻𝗸** :\n \n【Normal Permissions】[Click Here!](https://discord.com/oauth2/authorize?client_id=786972690405523518&scope=bot&permissions=3533888)\n【Admin Permissions】[Click Here!](https://discord.com/oauth2/authorize?client_id=786972690405523518&scope=bot&permissions=808463422)"),
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL(),
            text: "© DUMBOT"
        }
    }});
    console.log(`%c[🔔] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}invite`,`color : #DCB90E`)
}

module.exports.config = {
    name: "invite", 
    aliases: ["𝗶𝗻𝘃𝗶𝘁𝗲"]
}