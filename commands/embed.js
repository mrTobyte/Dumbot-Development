const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (message.content.startsWith(`${prefix}embed`)) {
        if(args[0].length > 50) {
            message.react('❌');
            console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}embed`,`color : #E01E03`)
            return message.channel.send({
                embed: {
                    thumbnail: {
                        url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                    },
                    color: 2123412,
                    description: (`**🔎|Command:** \`embed\`\n**ERROR:** \`❌ ► Too much caracters.\`\n**Description:** \`Send an embed of your message.\`\n \n**Syntax:** \`=embed <message>\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            }); 
        }
        if (!args.length) {
            message.react('❌');
            console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}embed`,`color : #E01E03`)
            return message.channel.send({
                embed: {
                    thumbnail: {
                        url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                    },
                    color: 2123412,
                    description: (`**🔎|Command:** \`embed\`\n**ERROR:** \`❌ ► Syntax\`\n**Description:** \`Send an embed of your message.\`\n \n**Syntax:** \`=embed <message>\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            }); 
        }
        message.channel.send({
            embed: {
                color: 2123412,
                description: (`${args.join(" ")}`),
                footer: {
                    icon_url: message.author.avatarURL(),
                    text: (`${message.author.tag}`)
                }
            }
        }); 
    }
    console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}embed`,`color : #0AC032`)
}

module.exports.config = {
    name: "embed", 
    aliases: ["𝗲𝗺𝗯𝗲𝗱"]
}   