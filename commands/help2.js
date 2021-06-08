const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const Pages = require('discord-pages')

module.exports.run = async(client,message) =>{
    console.log(`%c[📜] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}informations`,`color : #DCAA0E`)
    const e1 = new Discord.MessageEmbed()
    .setColor(2123412)
    .setTitle('🔎 • **INFOS (5)**')
    .setDescription('\`\`=help     \`\`-Dumbot\'s help menu.\n\`\`=ping     \`\`-Gives you your latency and that of the discord API.\n\`\`=bio      \`\`-Dumbot\'s biography.\n\`\`=invite   \`\`-Gives two Dumbot invitation links.\n\`\`=botinfo  \`\`-All informations about Dumbot.\n\`\`=vote     \`\`-Help us by voting for Dumbot!')
    const e2 = new Discord.MessageEmbed()
    .setColor(2123412)
    .setTitle('😄 • **UTILITY (6)**')
    .setDescription('\`\`=covid <country>       \`\`-Gives you the Covid-19 statistics.\n\`\`=8ball <question>      \`\`-Answer your question with random but true choices.\n\`\`=meteo <city>          \`\`-Gives you the meteo of the chosen city.\n\`\`=suggest <message>     \`\`-Creates a suggestion.\n\`\`=roll                  \`\`-Gives you a number between 0 and the chosen number.\n\`\`=avatar <user>         \`\`-Send the avatar of the chosen user.')
    const e3 = new Discord.MessageEmbed()
    .setColor(2123412)
    .setTitle('🔨 • **MODERATION (5)**')
    .setDescription('\`\`=userinfo <user> \`\`-All informations concerning a user Discord.\n\`\`=clear <number>  \`\`-Deletes the last *n* messages.\n\`\`=say             \`\`-Repeat your message.\n\`\`=server          \`\`-Gives you all informations about the server.\n\`\`=embed           \`\`-repeat your message in an embed.')
    const e4 = new Discord.MessageEmbed()
    .setColor(2123412)
    .setTitle('🙌 • **ACTIONS (6)**')
    .setDescription('\`\`=objection   \`\`-Send the famous \'Objection\' gif.\n\`\`=humoji      \`\`-Send an ascii art.\n\`\`=lenny       \`\`-Send the lenny ascii art.\n\`\`=saddy       \`\`-Send an saddy ascii art.\n\`\`=tableflip   \`\`-Send the tableflip emote.\n\`\`=poke <user> \`\`-Send a poke to someone.')
    const e5 = new Discord.MessageEmbed()
    .setColor(2123412)
    .setTitle('🤪 • **FUN (6)**')
    .setDescription('\`\`=flip       \`\`-flip your message.\n\`\`=binary     \`\`-Converts your text into binary code.\n\`\`=ascii      \`\`-Converts your text into ascii art.\n\`\`=rps        \`\`-Creates a Rock-Papers-Scissors game.\n\`\`=pi         \`\`-Gives you the first thousand decimal places of 𝝿.\n\`\`=beauty     \`\`-Evaluate your beauty.')
    const e6 = new Discord.MessageEmbed()
    .setColor(2123412)
    .setTitle('📰 • **MEDIAS (5)**')
    .setDescription('\`\`=wikipedia <search>   \`\`-Start a Wikipedia search.\n\`\`=motivation           \`\`-Send a Reddit post about motivation.\n\`\`=meme                 \`\`-Send meme from Reddit.\n\`\`=instagram <account>  \`\`-All informations about an Instagram account.\n\`\`=roblox <account>     \`\`-All informations about a Roblox account.')
    const e7 = new Discord.MessageEmbed()
    .setColor(2123412)
    .setTitle('🖼️ • **IMAGE (6)**')
    .setDescription('\`\`=slap <user>           \`\`-Send a meme of you hiting user.\n\`\`=trash <user>          \`\`-Edit the avatar of the chosen user.\n\`\`=triggered <user>      \`\`-Edit the avatar of the chosen user.\n\`\`=spank <user>          \`\`-Spank someone for bad acts.\n\`\`=stonks <user>         \`\`-Edit the avatar of the chosen user with stonks meme.\n\`\`=notstonks <user>      \`\`-Edit the avatar of the chosen user with stonks meme.')
    const e8 = new Discord.MessageEmbed()
    .setColor(2123412)
    .setTitle('📑 • **OTHERS.. (2)**')
    .setDescription('\`\`=achievement <message> \`\`-Send an achievement with a custom message.\n\`\`=qr-code <url>         \`\`-Creates a QR-CODE of any link you want.')
    const e = new Pages({
    channel : message.channel,
    pages : [e1,e2,e3,e4,e5,e6,e7,e8]
    })
    e.createPages()
}
    

module.exports.config = {
    name: "informations", 
    aliases: ['infos','i', "𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻𝘀"]
}