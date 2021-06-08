const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    const messageArray = message.content.split(' ');
	const args = messageArray.slice(1);
    const value = parseInt(args.join(" "));
    if (!args.length) {
        message.react('❌');
        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}roll`,`color : #E01E03`)
        return message.channel.send({
            embed: {
                thumbnail: {
                    url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                },
                color: 2123412,
                description: (`**🔎|Command:** \`roll\`\n**ERROR:** \`❌ ► Syntax\`\n**Description:** \`Gives a random number between 0 and n.\`\n \n**Syntax:** \`=roll <number>\``),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: (`© DUMBOT`)
                }
            }
        }); 
    } if (!isFinite(value)) {
        message.react('❌');
        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}roll`,`color : #E01E03`)
    return message.channel.send({
        embed: {
            thumbnail: {
                url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
            },
            color: 2123412,
            description: (`**🔎|Command:** \`roll\`\n**ERROR:** \`❌ ► Syntax\`\n**Description:** \`Gives a random number between 0 and n.\`\n \n**Syntax:** \`=roll <number>\``),
            footer: {
                icon_url: client.user.avatarURL(),
                text: (`© DUMBOT`)
            }
        }
    }); 
    }   
    isFinite
    const roll = Math.floor(Math.random() * value) + 1;
    const embed = new Discord.MessageEmbed() 
    .addField("Dumbot rolled:", roll)
    .setColor(2123412)
    message.channel.send({embed})
    console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}roll`,`color : #0AC032`)
}

module.exports.config = {
    name: "roll", 
    aliases: ["𝗿𝗼𝗹𝗹"]
}   