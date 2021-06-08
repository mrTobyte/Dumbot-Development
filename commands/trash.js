const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const DIG = require("discord-image-generation");

module.exports.run = async(client,message) =>{
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    if (args.length > 25) {
        message.react('❌');
        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}trash`,`color : #E01E03`)
        return message.channel.send({
            embed: {
                thumbnail: {
                    url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                },
                color: 2123412,
                description: (`**🔎|Command:** \`trash\`\n**ERROR:** \`❌ ► Syntax.\`\n**Description:** \`Edit the avatar of the chosen user.\`\n \n**Syntax:** \`=trash <user>\``),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: (`© DUMBOT`)
                }
            }
        }); 
    }
    let avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png' });
    let img = await new DIG.Trash().getImage(avatar)
    let attach = new Discord.MessageAttachment(img, "delete.png");;
    message.channel.send(attach)
    console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}trash`,`color : #0AC032`)
}

module.exports.config = {
    name: "trash", 
    aliases: ["𝘁𝗿𝗮𝘀𝗵"]
}   