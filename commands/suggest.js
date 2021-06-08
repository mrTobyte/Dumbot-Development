const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (!args.length) {
        message.react('❌');
        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}suggest`,`color : #E01E03`)
        return message.channel.send({
            embed: {
                thumbnail: {
                    url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                },
                color: 2123412,
                description: (`**🔎|Command:** \`suggest\`\n**ERROR:** \`❌ ► Syntax\`\n**Description:** \`Create a suggestion.\`\n \n**Syntax:** \`=suggest <message>\``),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: (`© DUMBOT`)
                }
            }
        }); 
    }
    if(args[0].length > 50) {
        message.react('❌');
        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}suggest`,`color : #E01E03`)
        return message.channel.send({
            embed: {
                thumbnail: {
                    url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                },
                color: 2123412,
                description: (`**🔎|Command:** \`suggest\`\n**ERROR:** \`❌ ► Too much caracters.\`\n**Description:** \`Create a suggestion.\`\n \n**Syntax:** \`=suggest <message>\``),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: (`© DUMBOT`)
                }
            }
        }); 
    }
    const embed = new Discord.MessageEmbed()
    .setColor(2123412)
    .setAuthor(`${message.author.username}`, message.author.avatarURL())
    .setDescription(`${args.join(" ")}\n \n✅-\`Yes\`\n❌-\`No\``);
    message.channel.send(embed).then(msg =>{
        msg.react('✅'),
        msg.react('❌')
        })
        console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}suggest`,`color : #0AC032`)
}

module.exports.config = {
    name: "suggest", 
    aliases: ["𝘀𝘂𝗴𝗴𝗲𝘀𝘁"]
}   