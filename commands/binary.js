const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const axios = require('axios');

module.exports.run = async(client,message) =>{
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);
    const url = `http://some-random-api.ml/binary?text=${args}`;
    if (args[0] < 1) {
        message.react('❌');
        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}binary`,`color : #E01E03`)
        return message.channel.send({
            embed: {  
                thumbnail: {
                    url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                },
                color: 2123412,
                description: (`**🔎|Command:** \`binary\`\n**ERROR:** \`❌ ► Please enter some text.\`\n**Description:** \`Translate your message into binary.\`\n \n**Syntax:** \`=binary <message>\``),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: (`© DUMBOT`)
                }
            }
        }); 
    }
    if(args[0] > 50) {
        message.react('❌');
        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}binary`,`color : #E01E03`)
        return message.channel.send({
            embed: {  
                thumbnail: {
                    url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                },
                color: 2123412,
                description: (`**🔎|Command:** \`binary\`\n**ERROR:** \`❌ ► Too much caracters.\`\n**Description:** \`Translate your message into binary.\`\n \n**Syntax:** \`=binary <message>\``),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: (`© DUMBOT`)
                }
            }
        }); 
    }

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            message.react('❌');
            console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}binary`,`color : #E01E03`)
            return message.channel.send({
                embed: {
                    thumbnail: {
                        url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                    },
                    color: 2123412,
                    description: (`**🔎|Command:** \`binary\`\n**ERROR:** \`❌ ► Syntax\`\n**Description:** \`Translate your message into binary.\`\n \n**Syntax:** \`=binary <message>\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            }); 
        }

        const embed = new Discord.MessageEmbed()
            .setColor(2123412)
            .setTitle('**Here is your text :**')
            .setDescription(`**${data.binary}**`)
        await message.channel.send(embed)
        console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}binary`,`color : #0AC032`)
}

module.exports.config = {
    name: "binary", 
    aliases: ["𝗯𝗶𝗻𝗮𝗿𝘆"]
}