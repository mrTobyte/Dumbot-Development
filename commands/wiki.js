const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const superagent = require('superagent');
const snekfetch = require('snekfetch');

module.exports.run = async(client,message) =>{
    const messageArray = message.content.split(' ');
	const args = messageArray.slice(1);
    const query = args.join(' ');
    const { body } = await snekfetch
        .get('https://en.wikipedia.org/w/api.php')
        .query({
            action: 'query',
            prop: 'extracts',
            format: 'json',
            titles: query,
            exintro: '',
            explaintext: '',
            redirects: '',
            formatversion: 2
        });
        if (!args.length) {
            message.react('❌');
                    console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}wikipedia`,`color : #E01E03`)
            return message.channel.send({
                embed: {
                    thumbnail: {
                        url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                    },
                    color: 2123412,
                    description: (`**🔎|Command:** \`wikipedia\`\n**ERROR:** \`❌ ► Syntax\`\n**Description:** \`Send the wikipedia's informations.\`\n \n**Syntax:** \`=wikipedia <something>\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            }); 
        }
            if (args.length > 50) {
                message.react('❌');
                        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}wikipedia`,`color : #E01E03`)
                return message.channel.send({
                    embed: {
                        thumbnail: {
                            url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                        },
                        color: 2123412,
                        description: (`**🔎|Command:** \`wikipedia\`\n**ERROR:** \`❌ ► Too much caracters.\`\n**Description:** \`Send the wikipedia's informations.\`\n \n**Syntax:** \`=wikipedia <something>\``),
                        footer: {
                            icon_url: client.user.avatarURL(),
                            text: (`© DUMBOT`)
                        }
                    }
                }); 
        } if (body.query.pages[0].missing) return message.channel.send({
                embed: {
                    thumbnail: {
                        url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                    },
                    color: 2123412,
                    description: (`**🔎|Command:** \`wikipedia\`\n**ERROR:** \`❌ ► No Results.\`\n**Description:** \`Send the wikipedia's informations.\`\n \n**Syntax:** \`=wikipedia <something>\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
        });
        console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}wikipedia`,`color : #0AC032`)
        const embed = new Discord.MessageEmbed()
            .setColor(2123412)
            .setTitle(body.query.pages[0].title)
            .setAuthor('Wikipedia', 'https://i.imgur.com/a4eeEhh.png')
            .setDescription(body.query.pages[0].extract.substr(0, 2000).replace(/[\n]/g, '\n\n'));
        return message.channel.send(embed).catch(console.error);
        
        
}
    
module.exports.config = {
    name: "wikipedia", 
    aliases: ["wiki", "𝘄𝗶𝗸𝗶𝗽𝗲𝗱𝗶𝗮"]
}   