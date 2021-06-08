const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const flip = require('flip-text')

module.exports.run = async(client,message) =>{
    let args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();
    if (message.content.startsWith(`${prefix}flip`)) {
        if(args[0] > 50) {
            message.react('❌');
            console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}flip`,`color : #E01E03`)
            return message.channel.send({
                embed: {
                    thumbnail: {
                        url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                    },
                    color: 2123412,
                    description: (`**🔎|Command:** \`flip\`\n**ERROR:** \`❌ ► Too much caracters.\`\n**Description:** \`Flip the message.\`\n \n**Syntax:** \`=flip <message>\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            }); 
        }
        if (!args[0]) {
            message.react('❌');
            console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}flip`,`color : #E01E03`)
            return message.channel.send({
                embed: {
                    thumbnail: {
                        url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                    },
                    color: 2123412,
                    description: (`**🔎|Command:** \`flip\`\n**ERROR:** \`❌ ► Syntax\`\n**Description:** \`Flip the message.\`\n \n**Syntax:** \`=flip <message>\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            }); 
        }
        const msgflip = flip(`${args.join(" ")}`);
        message.channel.send(msgflip)
    }
    console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}flip`,`color : #0AC032`)
}

module.exports.config = {
    name: "flip", 
    aliases: ["𝗳𝗹𝗶𝗽"]
}