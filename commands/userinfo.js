const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    if (args.length > 25) {
        message.react('❌');
        console.log('\x1b[31m',`[❌ ]${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}userinfo`);
        return message.channel.send({
            embed: {
                thumbnail: {
                    url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                },
                color: 2123412,
                description: (`**🔎|Command:** \`userinfo\`\n**ERROR:** \`❌ ► Syntax.\`\n**Description:** \`Gives you informations about users.\`\n \n**Syntax:** \`=userinfo <user>\``),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: (`© DUMBOT`)
                }
            }
        }); 
    }
        let status;
        switch (user.presence.status) {
            case "online":
                status = "🟢 Online";
                break;
            case "dnd":
                status = "🔴 Do not disturb";
                break;
            case "idle":
                status = "🟡 Idle";
                break;
            case "offline":
                status = "⚫️ Offline";
                break;
        }
        if (user.user.bot === true) {
            bot = "✅ Yes";
          } else {
            bot = "❌ No";
          }

        const embed = new Discord.MessageEmbed()
            .setTitle(`${user.user.username} stats`)
            .setColor(2123412)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "❯ Name: ",
                    value: (`\`\`\`${user.user.username}\`\`\``),
                    inline: true
                },
                {
                    name: "❯ Current Status: ",
                    value: (`\`\`\`${status}\`\`\``),
                    inline: true
                },
                
                {
                    name: "❯ Bot? ",
                    value: (`\`\`\`${bot}\`\`\``),
                    inline: true
                },
                {
                    name: "❯ Activity: ",
                    value: (`\`\`\`${user.presence.activities[0] ? user.presence.activities[0].name : `No Game Detected!`}\`\`\``),
                    inline: true
                },
                {
                    name: '❯ Creation Date: ',
                    value: (`\`\`\`${user.user.createdAt.toLocaleDateString("en-us")}\`\`\``),
                    inline: true
                },
                {
                    name: '❯ User Roles: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                },
                {
                    name: '❯ Avatar link: ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`,
                    inline: true
                }
            )
        await message.channel.send(embed)
        console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}userinfo`,`color : #0AC032`)
}

module.exports.config = {
    name: "userinfo", 
    aliases: ["𝘂𝘀𝗲𝗿𝗶𝗻𝗳𝗼", "user"]
}