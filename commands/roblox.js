const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const snekfetch = require('snekfetch')

module.exports.run = async(client,message) =>{
    const messageArray = message.content.split(' ');
	const args = messageArray.slice(1);
    let saybot = args.join('_');
    const url = `https://api.roblox.com/users/get-by-username?username=${saybot}`;
    snekfetch.get(url).then(result => {
          const data = result.body.Id;
          if (saybot.length < 1) {
            message.react('❌');
                        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}roblox`,`color : #E01E03`)
            return message.channel.send({
                embed: {
                    thumbnail: {
                        url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                    },
                    color: 2123412,
                    description: (`**🔎|Command:** \`roblox\`\n**ERROR:** \`❌ ► Syntax.\`\n**Description:** \`Gives you informations about Roblox User.\`\n \n**Syntax:** \`=roblox <name>\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            }); 
        }
        if (saybot.length > 50) {
            message.react('❌');
                        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}roblox`,`color : #E01E03`)
            return message.channel.send({
                embed: {
                    thumbnail: {
                        url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                    },
                    color: 2123412,
                    description: (`**🔎|Command:** \`roblox\`\n**ERROR:** \`❌ ► Too much caracters.\`\n**Description:** \`Gives you informations about Roblox User.\`\n \n**Syntax:** \`=roblox <name>\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            }); 
        }
          if (result.body.Id === "undefined") return message.channel.send("Couldn't find a roblox user by the name of " + saybot)
          const url2 = `https://api.roblox.com/ownership/hasasset?userId=${data}&assetId=102611803`;
          snekfetch.get(url2).then(a => {
        const Verifiedcheck = a.body
        console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}roblox`,`color : #0AC032`)
        message.channel.send({
                embed: {
            color: 2123412,
            title: `DUMBOT | ROBLOX`, 
            fields: [
                {
                    name: (`👤 • **Username**`),
                    value: (`\`\`\`${saybot}\`\`\``),
                    inline: true, 
                },
                {
                    name: (`🆔 • **User ID**`),
                    value: (`\`\`\`${data}\`\`\``),
                    inline: true, 
                },
                {
                    name: (`✅ • **Verified**`),
                    value: (`\`\`\`${Verifiedcheck}\`\`\``),
                    inline: true, 
                },
                {
                    name: (`🔗 • **Profile Link**`),
                    value: (`\`\`\`https://web.roblox.com/users/${data}/profile\`\`\``),
                    inline: true, 
                },
            ],
            footer: {
                icon_url: message.author.avatarURL(),
                text: (`© DUMBOT`)
            },
            timestamp: new Date(),
            image: {
                url: ("http://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&Format=Png&username=" + saybot),
            },
            }
        });
    });
});
}

module.exports.config = {
    name: "roblox", 
    aliases: ["rblx", "𝗿𝗼𝗯𝗹𝗼𝘅"]
}