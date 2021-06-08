const Discord = require('discord.js') 
const moment = require('moment') 
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    message.channel.send('(╯︵╰,)');   
    console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}saddy`,`color : #0AC032`)
}

module.exports.config = {
    name: "saddy", 
    aliases: ["𝘀𝗮𝗱𝗱𝘆"] 
}