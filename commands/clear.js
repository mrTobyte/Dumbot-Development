const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    const messageArray = message.content.split(' ');
	const args = messageArray.slice(1);
    if (!message.member.permissions.has("MANAGE_MESSAGES")){ 
        message.react('❌')
        console.log('\x1b[31m',`[❌ ]${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}clear`);
        return message.channel.send({embed: {
        thumbnail: {
            url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
        },
        color: 2123412,
        description: (`**🔎|Command:** \`clear\`\n**ERROR:** \`❌ ► Lack of Permissions\`\n**Description:** \`Deletes the indicated number of messages.\`\n\`→ 99 messages max at a time.\`\n\`→ No text.\`\n \n**Syntax:** \`\`\`=clear <number>\`\`\``),
        footer: {
            icon_url: client.user.avatarURL(),
            text: (`© DUMBOT`)
        }
    }})
    };
    
    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { 
        message.react('❌')
        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}clear`,`color : #E01E03`)
        return message.channel.send({embed: {
        thumbnail: {
            url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
        },
        color: 2123412,
        description: (`**🔎|Command:** \`clear\`\n**ERROR:** \`❌ ► Incorrect Number\`\n**Description:** \`Deletes the indicated number of messages.\`\n\`→ 99 messages max at a time.\`\n\`→ No text.\`\n \n**Syntax:** \`\`\`=clear <number>\`\`\``),
        footer: {
            icon_url: client.user.avatarURL(),
            text: (`© DUMBOT`)
        }
    }}); 
    } 

    if(args[0].length > 2) {
        message.react('❌')
        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}clear`,`color : #E01E03`)
        return message.channel.send({embed: {
            thumbnail: {
                url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
            },
            color: 2123412,
            description: (`**🔎|Command:** \`clear\`\n**ERROR:** \`❌ ► Too Hight Number\`\n**Description:** \`Deletes the indicated number of messages.\`\n\`→ 99 messages max at a time.\`\n\`→ No text.\`\n \n**Syntax:** \`\`\`=clear <number>\`\`\``),
            footer: {
                icon_url: client.user.avatarURL(),
                text: (`© DUMBOT`)
            }
        }});
    } else {
        deleteAmount = parseInt(args[0]);
    message.channel.bulkDelete(deleteAmount + 1, true);
    message.reply(`**Successfully** Deleted **${deleteAmount}** Messages.`).then(message => message.delete({ timeout: "3000" }));
    console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}clear`,`color : #0AC032`)
    }
}

module.exports.config = {
    name: "clear", 
    aliases: ["𝗰𝗹𝗲𝗮𝗿"]
}