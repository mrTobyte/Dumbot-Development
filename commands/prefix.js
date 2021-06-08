const Discord = require('discord.js');
const fs = require("fs")
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    let arg = message.content.trim().split(/ +/g)
    console.log(arg)

            if (!arg[1])
        return message.channel.send({embed: {
            thumbnail: {
                url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
            },
            color: 2123412,
            description: (`**🔎|Command:** \`prefix\`\n**ERROR:** \`❌ ► Syntax.\`\n**Description:** \`Change the bot prefix for your server.\`\n \n**Syntax:** \`=prefix <prefix>\``),
            footer: {
                icon_url: client.user.avatarURL(),
                text: (`© DUMBOT`)
            }
        }});

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: arg[1]
    }
        
    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });

    message.react('✅');
    console.log(`%c[✅] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}prefix`,`color : #1BEE3A`)
    message.channel.send({embed: {
        thumbnail: {
                        url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                    },
                    color: 2123412,
                    description: (`**🔎|Command:** \`prefix\`\n**prefix changed:** \`✅ ► Prefix changed by:\` "**${prefix}**"\n**Description:** \`Change the bot's prefix of the server.\`\n \n**Syntax:** \`=prefix <prefix>\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
    }}});


}

module.exports.config = {
    name: "prefix",
    aliases: []
}