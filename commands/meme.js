const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const fetch = require('node-fetch');
const got = require('got');

module.exports.run = async(client,message) =>{
    message.react('📲');
    const embed = new Discord.MessageEmbed();
    got('https://www.reddit.com/r/memes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        embed.setDescription(`𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝗺𝗲𝗺𝗲 𝗳𝗿𝗼𝗺 [***𝗥𝗘𝗗𝗗𝗜𝗧***](${memeUrl}) 👀`)
        embed.setTitle(`**__𝗗𝗨𝗠𝗕𝗢𝗧 𝗠𝗘𝗠𝗘𝗦 :__**`);
        embed.setColor(2123412)
        embed.setImage(memeImage);
        embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
        message.channel.send(embed)
    })
    console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}meme`,`color : #0AC032`)
}

module.exports.config = {
    name: "meme", 
    aliases: ["𝗺𝗲𝗺𝗲"]
}