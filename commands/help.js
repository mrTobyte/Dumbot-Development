const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    message.react('⚙️');
    const timeTaken = Date.now() - message.createdTimestamp;
    console.log(`%c[📜] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}help`,`color : #DCAA0E`)
    message.channel.send({embed: {
        color: 2123412,
        title: `DUMBOT | Need Help?`, 
        description: ('● Here is a summary of the commands executable by DUMBOT.\nIf you would like to know more about ordering, please do:\n`\`\`               =𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻𝘀\`\`\`\n ** ** \n'),
        fields: [
            {
                name: (`🔎 • **INFOS (6)**`),
                value: ("\`\`\`=𝗵𝗲𝗹𝗽\n=𝗽𝗶𝗻𝗴\n=𝗯𝗶𝗼\n=𝗶𝗻𝘃𝗶𝘁𝗲\n=𝗯𝗼𝘁𝗶𝗻𝗳𝗼\n=𝘃𝗼𝘁𝗲\`\`\`"),
                inline: true, 
            },
            {
                name: (`😄 • **UTILITY (6)**`),
                value: ("\`\`\`=𝗰𝗼𝘃𝗶𝗱\n=𝟴𝗯𝗮𝗹𝗹\n=𝗺𝗲𝘁𝗲𝗼\n=𝘀𝘂𝗴𝗴𝗲𝘀𝘁\n=𝗿𝗼𝗹𝗹\n=𝗮𝘃𝗮𝘁𝗮𝗿\`\`\`"),
                inline: true,
            },
            {
                name: (`🔨 • **MODERATION (5)**`),
                value: ("\`\`\`=𝘂𝘀𝗲𝗿𝗶𝗻𝗳𝗼\n=𝗰𝗹𝗲𝗮𝗿\n=𝘀𝗮𝘆\n=𝘀𝗲𝗿𝘃𝗲𝗿\n=𝗲𝗺𝗯𝗲𝗱\`\`\`"),
                inline: true,
            },
            {
                name: (`🙌 • **ACTIONS (6)**`),
                value: ("\`\`\`=𝗼𝗯𝗷𝗲𝗰𝘁𝗶𝗼𝗻\n=𝗵𝘂𝗺𝗼𝗷𝗶\n=𝗹𝗲𝗻𝗻𝘆\n=𝘀𝗮𝗱𝗱𝘆\n=𝘁𝗮𝗯𝗹𝗲𝗳𝗹𝗶𝗽\n=𝗽𝗼𝗸𝗲\`\`\`"),
                inline: true,
            },  
            {
                name: (`🤪 • **FUN (6)**`),
                value: ("\`\`\`=𝗳𝗹𝗶𝗽\n=𝗯𝗶𝗻𝗮𝗿𝘆\n=𝗮𝘀𝗰𝗶𝗶\n=𝗿𝗽𝘀\n=𝗽𝗶\n=𝗯𝗲𝗮𝘂𝘁𝘆\`\`\`"),
                inline: true,
            },  
            {
                name: (`📰 • **MEDIAS (5)**`),
                value: ("\`\`\`=𝘄𝗶𝗸𝗶𝗽𝗲𝗱𝗶𝗮\n=𝗺𝗼𝘁𝗶𝘃𝗮𝘁𝗶𝗼𝗻\n=𝗺𝗲𝗺𝗲\n=𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺\n=𝗿𝗼𝗯𝗹𝗼𝘅\`\`\`"),
                inline: true,
            },  
            {
                name: (`🖼️ • **IMAGE (6)**`),
                value: (`\`\`\`=𝘀𝗹𝗮𝗽\n=𝘁𝗿𝗮𝘀𝗵\n=𝘁𝗿𝗶𝗴𝗴𝗲𝗿𝗲𝗱\n=𝘀𝗽𝗮𝗻𝗸\n=𝘀𝘁𝗼𝗻𝗸𝘀\n=𝗻𝗼𝘁𝘀𝘁𝗼𝗻𝗸𝘀\`\`\``),
                inline: true,
            }, 
            {
                name: (`📑 • **OTHERS.. (2)**`),
                value: (`\`\`\`=𝗮𝗰𝗵𝗶𝗲𝘃𝗲𝗺𝗲𝗻𝘁\n=𝗾𝗿-𝗰𝗼𝗱𝗲\`\`\``),
                inline: true,
            }, 
            {
                name: (`🔞 • **NSFW (1)**`),
                value: (`\`\`\`=𝗻𝘀𝗳𝘄\`\`\``),
                inline: true,
            },  
            {
                name: (`❯  **OTHERS..**`),
                value: (`[INVITATION](https://discord.com/oauth2/authorize?client_id=786972690405523518&scope=bot&permissions=8200) | [WEBSITE](https://discord.com/terms) | [SUPPORT](https://discord.gg/6v8thxxCdN) | © DUMBOT`),
                inline: false,
            },  
        ],
        timestamp: new Date(),
        footer: {
            icon_url: message.author.avatarURL(),
            text: (`${message.author.tag}`)
        },
    }});
}
    

module.exports.config = {
    name: "help", 
    aliases: ["hlp", "𝗵𝗲𝗹𝗽", "h"]
}