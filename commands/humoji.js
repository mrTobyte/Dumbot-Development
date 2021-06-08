const Discord = require('discord.js') 
const moment = require('moment') 
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    message.channel.send('┐(￣ヮ￣)┌');   
    console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}humoji`,`color : #0AC032`)
}

module.exports.config = {
    name: "humoji", 
    aliases: ["𝗵𝘂𝗺𝗼𝗷𝗶"] 
}