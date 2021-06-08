const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const os = require('os')
var osu = require('node-os-utils')

module.exports.run = async(client,message) =>{
    const timeTaken = Date.now() - message.createdTimestamp;
    const embed = new Discord.MessageEmbed()
            .setTitle('DUMBOT | STATISTICS')
            .setColor(2123412)
            .addFields(
                {
                    name: '**🌐 Servers**',
                    value: `\`\`\`Serving ${virgule(client.guilds.cache.size)} servers\`\`\``,
                    inline: true
                },
                {
                    name: '**📺 Channels**',
                    value: `\`\`\`Serving ${virgule(client.channels.cache.size)} channels\`\`\``,
                    inline: true
                },
                {
                    name: '**👥 Users**',
                    value: `\`\`\`Serving ${virgule(client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0))} users\`\`\``,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `\`\`\`⤷ \\🌐・𝗔𝗣𝗜 𝗟𝗮𝘁𝗲𝗻𝗰𝘆 : ${Math.round(client.ws.ping)} 𝗺𝘀\n⤷ \\📩・𝗦𝗲𝗿𝘃𝗲𝗿 𝗽𝗶𝗻𝗴 : ${Math.round(timeTaken)} 𝗺𝘀\`\`\``,
                    inline: true
                },
                {
                    name: '📊 Server Info',
                    value: `\`\`\`State: ✅[GOOD]\nMore Infos: <=system>\`\`\``,
                    inline: true
                },
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
        console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}botinfo`,`color : #0AC032`)
}

module.exports.config = {
    name: "botinfo", 
    aliases: ["bi", "𝗯𝗼𝘁𝗶𝗻𝗳𝗼"]
}   

function virgule(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
}