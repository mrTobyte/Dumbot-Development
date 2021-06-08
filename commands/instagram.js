const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const axios = require('axios')

module.exports.run = async(client,message) =>{
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);
    if (!args[0]) {
        message.react('❌');
        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}instagram`,`color : #E01E03`)
            return message.channel.send({
                embed: {
                    thumbnail: {
                        url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                    },
                    color: 2123412,
                    description: (`**🔎|Command:** \`instagram\`\n**ERROR:** \`❌ ► Please enter an account name\`\n**Description:** \`Send the chosen Instagram account.\`\n \n**Syntax:** \`=instagram <account>\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
        }); 
    }
    let url, response, account, details;
    try {
        url = `https://instagram.com/${args[0]}/?__a=1`;
        response = await axios.get(url)
        account = response.data
        details = account.graphql.user
    } catch (error) {
        message.react('❌');
        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}instagram`,`color : #E01E03`)
            return message.channel.send({
                embed: {
                    thumbnail: {
                        url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                    },
                    color: 2123412,
                    description: (`**🔎|Command:** \`instagram\`\n**ERROR:** \`❌ ► Not an Account\`\n**Description:** \`Send the chosen Instagram account.\`\n \n**Syntax:** \`=instagram <account>\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
        }); 
    }

    const embed = new Discord.MessageEmbed()
        .setColor(2123412)
        .setTitle(`${details.is_verified ? `${details.username} ✅` : ` ${details.username}`} ${details.is_private ? '🔒' : ''} `)
        .setDescription(details.biography)
        .setThumbnail(details.profile_pic_url)
        .addFields(
            {
                name: "Total Posts:",
                value: details.edge_owner_to_timeline_media.count.toLocaleString(),
                inline: true
            },
            {
                name: "Followers:",
                value: details.edge_followed_by.count.toLocaleString(),
                inline: true
            },
            {
                name: "Following:",
                value: details.edge_follow.count.toLocaleString(),
                inline: true
            }
        )
    await message.channel.send(embed)
    console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}instagram`,`color : #0AC032`)
}

module.exports.config = {
    name: "instagram", 
    aliases: ["𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺"]
}