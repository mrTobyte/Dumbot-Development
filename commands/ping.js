const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    var ping = Math.round(Math.random() * 40);
    message.react('🏓');
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`🏓 **𝗣𝗼𝗻𝗴**!(Pinging.  )`).then(m => m.edit(`🏓 **𝗣𝗼𝗻𝗴**!(Pinging.. )`).then(m => m.edit(`🏓 **𝗣𝗼𝗻𝗴**!(Pinging...)`).then(m => m.edit(`🏓 **𝗣𝗼𝗻𝗴**!\n⤷ \\🌐・𝗔𝗣𝗜 𝗟𝗮𝘁𝗲𝗻𝗰𝘆 : **${Math.round(client.ws.ping)}**𝗺𝘀\n⤷ \\📩・𝗦𝗲𝗿𝘃𝗲𝗿 𝗽𝗶𝗻𝗴 : **${Math.round(timeTaken)}**𝗺𝘀\n⤷ \\📮・𝗕𝗼𝘁 𝗣𝗶𝗻𝗴 : **${ping}**𝗺𝘀`))));
    console.log(`%c[🏓] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}ping`,`color : #E10C33`)
}

module.exports.config = {
    name: "ping", 
    aliases: ["𝗽𝗶𝗻𝗴"]
}