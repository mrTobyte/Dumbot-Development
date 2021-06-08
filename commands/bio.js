const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const date = moment("11122020", "DDMMYYYY");
const today = moment(new Date());
const diff = today.diff(date, 'days')

module.exports.run = async(client,message) =>{
    message.channel.send({embed: {
        color: 2123412,
        thumbnail: {
            url: 'https://cdn.discordapp.com/attachments/784328675109765141/788814443089231902/unknown.png',
        },
        title: `DUMBOT | BIOGRAPHY`, 
        fields: [
            {
                name: (`**Creation Date :**`),
                value: (`${moment(client.user.createdAt).format('DD/MM/YYYY')} | ${diff} days ago.`),
                inline: false,
            },
            {
                name: (`**Who am I ?**`),
                value: (`Created by two of the most beautiful men on this planet, Dumbot is designed to help and make Discord users laugh. It includes a large number of commands sorted by categories.`),
                inline: false,
            },
            {
                name: ('\u200b'),
                value: ('\u200b'),
                incline: false,
            }
        ],
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL(),
            text: "© DUMBOT"
        }
    }});
    console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}bio`,`color : #0AC032`)
}

module.exports.config = {
    name: "bio", 
    aliases: ["𝗯𝗶𝗼"]
}   