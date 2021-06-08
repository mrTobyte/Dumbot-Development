const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const talkedRecently = new Set();

module.exports.run = async(client,message) =>{
    if (talkedRecently.has(message.author.id)) {
        return message.channel.send("Please wait a few seconds before jerking off.");
    } else {
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 5000);
    }
    if (message.channel.nsfw === false) {
        message.react('❌');
        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}nsfw`,`color : #E01E03`)
            return message.channel.send({
                embed: {
                    thumbnail: {
                        url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                    },
                    color: 2123412,
                    description: (`**🔎|Command:** \`nsfw\`\n**ERROR:** \`❌ ► You must be in a NSFW Channel!\`\n**Description:** \`Send a random NSFW picture.\`\n \n**Syntax:** \`\`\`=nsfw\`\`\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            });
    };
    message.react('🔞');
    const ph = require('./ph.json');
    var ui 
    var nb = Math.round(Math.random() * 31);
    if (nb==0)ui = ph.link0
    if (nb==1)ui = ph.link1
    if (nb==2)ui = ph.link2
    if (nb==3)ui = ph.link3
    if (nb==4)ui = ph.link4
    if (nb==5)ui = ph.link5
    if (nb==6)ui = ph.link6
    if (nb==7)ui = ph.link7
    if (nb==8)ui = ph.link8
    if (nb==9)ui = ph.link9
    if (nb==10)ui = ph.link10
    if (nb==11)ui = ph.link11
    if (nb==12)ui = ph.link12
    if (nb==13)ui = ph.link13
    if (nb==14)ui = ph.link14
    if (nb==15)ui = ph.link15
    if (nb==16)ui = ph.link16
    if (nb==17)ui = ph.link17
    if (nb==18)ui = ph.link18
    if (nb==19)ui = ph.link19
    if (nb==20)ui = ph.link20
    if (nb==21)ui = ph.link21
    if (nb==22)ui = ph.link22
    if (nb==23)ui = ph.link23
    if (nb==24)ui = ph.link24
    if (nb==25)ui = ph.link25
    if (nb==26)ui = ph.link26
    if (nb==27)ui = ph.link27
    if (nb==28)ui = ph.link28
    if (nb==29)ui = ph.link29
    if (nb==30)ui = ph.link30
    if (nb==31)ui = ph.link31

    message.channel.send({
        embed: {
            color: 2123412,
            image: {
                url: `${ui}`
            },
			timestamp: new Date(),
			footer: {
				icon_url: client.user.avatarURL(),
				text: "© DUMBOT"
            }
        }
    })
    console.log(`%c[🔞] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}nsfw`,`color : #E10CCD`);}

module.exports.config = {
    name: "nsfw", 
    aliases: ["𝗻𝘀𝗳𝘄"]
}