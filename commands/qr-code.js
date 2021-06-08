const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const request = require('node-superfetch');

module.exports.run = async(client,message) =>{
    const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
                       
module.exports.run = async(client,message) =>{
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);
    if (!args.length) {
        message.react('❌');
        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}qr-code`,`color : #E01E03`)
        return message.channel.send({
            embed: {
                thumbnail: {
                    url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                },
                color: 2123412,
                description: (`**🔎|Command:** \`qr-code\`\n**ERROR:** \`❌ ► Syntax.\`\n**Description:** \`Create an qr-code.\`\n \n**Syntax:** \`=qr-code <url>\``),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: (`© DUMBOT`)
                }
            }
        }); 
    }
    try {
        const text = args.join(" ");
        if (text.length > 100) {
            message.react('❌');
            console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}qr-code`,`color : #E01E03`)
            return message.channel.send({
            embed: {
                thumbnail: {
                    url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                },
                color: 2123412,
                description: (`**🔎|Command:** \`qr-code\`\n**ERROR:** \`❌ ► Text must be under 100 characters.\`\n**Description:** \`Create an qr-code.\`\n \n**Syntax:** \`=qr-code <url>\``),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: (`© DUMBOT`)
                }
            }
        }); 
        }
        const superagent = require('superagent')
		const { body } = await superagent
			.get('https://api.qrserver.com/v1/create-qr-code/')
            .query({ data: args });
            console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}qr-code`,`color : #0AC032`)
        return message.channel.send({ files: [{ attachment: body, name: 'qr-code.png' }] });
     } catch (err) {
             console.log(err)
     }
    }
}

module.exports.config = {
    name: "qr-code", 
    aliases: ["qrc", "𝗾𝗿-𝗰𝗼𝗱𝗲"]
}