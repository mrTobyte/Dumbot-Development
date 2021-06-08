const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const snekfetch = require('snekfetch');

module.exports.run = async(client,message) =>{
    try {
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/GetMotivated.json?sort=top&t=week')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.MessageEmbed()
        .setColor(2123412)
        .setTitle(`**__𝗗𝗨𝗠𝗕𝗢𝗧 𝗠𝗢𝗧𝗜𝗩𝗔𝗧𝗜𝗢𝗡 :__**`)
        .setImage(allowed[randomnumber].data.url)
        .setFooter(`👍 ${allowed[randomnumber].data.ups} 💬 ${allowed[randomnumber].data.num_comments}`);
        message.channel.send(embed)
        console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}motivation`,`color : #0AC032`)
    } catch (err) {
        return console.log(err);
    }
}

module.exports.config = {
    name: "motivation", 
    aliases: ["mtv", "𝗺𝗼𝘁𝗶𝘃𝗮𝘁𝗶𝗼𝗻"]
}