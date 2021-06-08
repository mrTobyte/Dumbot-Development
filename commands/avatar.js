const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const embed = new Discord.MessageEmbed()
            .setTitle (`Here is ${user.user.username}\'s profile picture`)
            .setFooter('© DUMBOT')
            .setTimestamp()
            .setColor(2123412)
            .setImage (user.user.displayAvatarURL({format: 'png', size: 2048, dynamic: true}))
    await message.channel.send(embed)
    console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}avatar`,`color : #0AC032`)
};





module.exports.config = {
    name: "avatar", 
    aliases: ["ava", "𝗮𝘃𝗮𝘁𝗮𝗿"]
}