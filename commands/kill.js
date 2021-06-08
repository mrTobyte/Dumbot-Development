const Discord = require('discord.js')
const moment = require('moment');
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    message.react('🔫');
    const kill = require('./kill.json');
    const kill2 = require('./kill2.json');
    var ui 
    var nb = Math.round(Math.random() * 32);
    if (nb==0)ui = kill.link0
    if (nb==1)ui = kill.link1
    if (nb==2)ui = kill.link2
    if (nb==3)ui = kill.link3
    if (nb==4)ui = kill.link4
    if (nb==5)ui = kill.link5
    if (nb==6)ui = kill.link6
    if (nb==7)ui = kill.link7
    if (nb==8)ui = kill.link8
    if (nb==9)ui = kill.link9
    if (nb==10)ui = kill.link10
    if (nb==11)ui = kill.link11
    if (nb==12)ui = kill.link12
    if (nb==13)ui = kill.link13
    if (nb==14)ui = kill.link14
    if (nb==15)ui = kill.link15
    if (nb==16)ui = kill.link16
    if (nb==17)ui = kill.link17
    if (nb==18)ui = kill.link18
    if (nb==19)ui = kill.link19
    if (nb==20)ui = kill.link20
    if (nb==21)ui = kill.link21
    if (nb==22)ui = kill.link22
    if (nb==23)ui = kill.link23
    if (nb==24)ui = kill.link24
    if (nb==25)ui = kill.link25
    if (nb==26)ui = kill.link26
    if (nb==27)ui = kill.link27
    if (nb==28)ui = kill.link28
    if (nb==29)ui = kill.link29
    if (nb==30)ui = kill.link30
    if (nb==31)ui = kill.link31

    var nan
    var nb = Math.round(Math.random() * 16);
    if (nb==0)nan = kill2.link0
    if (nb==1)nan = kill2.link1
    if (nb==2)nan = kill2.link2
    if (nb==3)nan = kill2.link3
    if (nb==4)nan = kill2.link4
    if (nb==5)nan = kill2.link5
    if (nb==6)nan = kill2.link6
    if (nb==7)nan = kill2.link7
    if (nb==8)nan = kill2.link8
    if (nb==9)nan = kill2.link9
    if (nb==10)nan = kill2.link10
    if (nb==11)nan = kill2.link11
    if (nb==12)nan = kill2.link12
    if (nb==13)nan = kill2.link13
    if (nb==14)nan = kill2.link14
    if (nb==15)nan = kill2.link15
    if (nb==16)nan = kill2.link16

    message.channel.send({
        embed: {
            title: `💀 • \`\`\`${message.author.username}\`\`\` ${nan}`, 
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
    console.log(`%c[☠️] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}kill`,`color : #BA0A0A`)
}

module.exports.config = {
    name: "kill", 
    aliases: []
}