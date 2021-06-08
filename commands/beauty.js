const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
var osu = require('node-os-utils')

module.exports.run = async(client,message) =>{
    let args = message.content.slice(prefix.length).split(/ +/)
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let person = message.mentions.members.first(message, args[0]);
    if(person.id === message.author.id) return message.channel.send("Can't mention yourself");
    const dick = Math.round(Math.random() * 100);
    const dickIndex = Math.floor(dick / 10);
    const dickLevel = "▰".repeat(dickIndex) + "▱".repeat(10 - dickIndex);

    
    if (dick>50)phrase = (`\`${user.user.username}\` is so ***✨ WOW ! ✨***`)
    if (dick==20)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==21)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==22)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==23)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==24)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==25)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==26)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==27)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==28)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==29)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)    
    if (dick==30)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==31)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==32)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==33)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==34)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==35)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==36)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==37)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==38)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==39)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==40)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==41)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==42)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==43)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==44)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==45)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==46)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==47)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==48)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick==49)phrase = (`\`${user.user.username}\` is of all beauty! 🤭`)
    if (dick<20)phrase = (`Thanks \`${user.user.username}\` for existing! 🤢`)

    message.channel.send({embed: {
        color: 2123412,
        title: ("**__How Beautiful Are You__ ?** "),
        description: (`${phrase}\n \n\`${dickLevel} ${dick}%\`\n`),
        timestamp: new Date(),
        footer: {
            icon_url: message.author.avatarURL(),
            text: "© DUMBOT"
        }
    }});
    console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}beauty`,`color : #0AC032`)

}

module.exports.config = {
    name: "beauty", 
    aliases: ["𝗯𝗲𝗮𝘂𝘁𝘆"]
}   