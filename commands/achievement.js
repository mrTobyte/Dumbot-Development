const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);
    if (!args.length) {
        message.react('❌');
        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}achievement`,`color : #E01E03`)
        return message.channel.send({
            embed: {
                thumbnail: {
                    url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                },
                color: 2123412,
                description: (`**🔎|Command:** \`achievement\`\n**ERROR:** \`❌ ► Syntax\`\n**Description:** \`Create an achievement.\`\n \n**Syntax:** \`=achievement <message>\``),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: (`© DUMBOT`)
                }
            }
        }); 
    }
    try {
        const text = args.join(" ");
        if (text.length > 25) {
            message.react('❌');
            console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}achievement`,`color : #E01E03`)
            return message.channel.send({
            embed: {
                thumbnail: {
                    url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                },
                color: 2123412,
                description: (`**🔎|Command:** \`achievement\`\n**ERROR:** \`❌ ► Text must be under 25 characters.\`\n**Description:** \`Create an achievement.\`\n \n**Syntax:** \`=achievement <message>\``),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: (`© DUMBOT`)
                }
            }
        }); 
        }
         const superagent = require('superagent')
         const { body } = await superagent
             .get('https://www.minecraftskinstealer.com/achievement/a.php')
             .query({
                 i: 1,
                 h: 'Achievement Get!',
                 t: text
             });
         message.channel.send({ files: [{ attachment: body, name: 'achievement.png' }] 
       });
       console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}achievement`,`color : #0AC032`)
     } catch (err) {
             console.log(err)
     }
}

module.exports.config = {
    name: "achievement", 
    aliases: ["acmt", "𝗮𝗰𝗵𝗶𝗲𝘃𝗲𝗺𝗲𝗻𝘁"]
}   