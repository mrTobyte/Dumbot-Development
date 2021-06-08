const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    message.channel.send({embed: {
        color: 2123412,
        image: {
            url: "https://i.imgur.com/19WEQFO.gif"
        },
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL(),
            text: "© DUMBOT"
        }
    }});
    console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}objection`,`color : #0AC032`)
}

module.exports.config = {
    name: "objection", 
    aliases: ["𝗼𝗯𝗷𝗲𝗰𝘁𝗶𝗼𝗻"]
}