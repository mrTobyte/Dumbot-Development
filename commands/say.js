const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (message.content.startsWith(`${prefix}say`)) {
        if (!args.length) {
            message.react('❌');
            console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}say`,`color : #E01E03`)
            return message.channel.send({
                embed: {
                    thumbnail: {
                        url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                    },
                    color: 2123412,
                    description: (`**🔎|Command:** \`say\`\n**ERROR:** \`❌ ► Syntax\`\n**Description:** \`Repeat the message.\`\n \n**Syntax:** \`=say <message>\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            }); 
        }
        message.delete();
        message.channel.send(`${args.join(" ")}`);
    }
    console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}say`,`color : #0AC032`)
}

module.exports.config = {
    name: "say", 
    aliases: ["echo", "repeat", "𝘀𝗮𝘆"]
}