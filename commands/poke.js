const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const snekfetch = require("snekfetch")
const talkedRecently = new Set();

module.exports.run = async(client,message) =>{
    if (talkedRecently.has(message.author.id)) {
        return message.channel.send("Please wait a little bit before poking again.");
    } else {
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 60000);
    }
    if (message.mentions.users.size < 1) {
        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}poke`,`color : #E01E03`)
    return message.channel.send({
        embed: {
            thumbnail: {
                url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
            },
            color: 2123412,
            description: (`**🔎|Command:** \`poke\`\n**ERROR:** \`❌ ► Syntax\`\n**Description:** \`Poke someone.\`\n \n**Syntax:** \`=poke <user>\``),
            footer: {
                icon_url: client.user.avatarURL(),
                text: (`© DUMBOT`)
            }
        }
    });
    }
    let user = message.guild.member(message.mentions.users.first());
    message.channel.send({embed: {
        color: 2123412,
        description: ("📩 • Well Sent!"),
    }});
    user.send({embed: {
        color: 2123412,
        description: (`📍 • \`${message.author.username}\` sent you a poke!`),
        image: {
            url: "https://media.giphy.com/media/PkR8gPgc2mDlrMSgtu/giphy.gif"
        },
    }});
    console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}poke`,`color : #0AC032`)
}

module.exports.config = {
    name: "poke", 
    aliases: ["𝗽𝗼𝗸𝗲"]
}   