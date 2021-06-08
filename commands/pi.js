const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    const timeTaken = Date.now() - message.createdTimestamp;
    const embed = new Discord.MessageEmbed()
            .setTitle('DUMBOT | PI-NUMERATION')
            .setThumbnail('https://cdn.discordapp.com/attachments/780525185727856663/789564180218642472/Pi-Star.png')
            .setColor(2123412)
            .addFields(
                {
                    name: '**𝛑 is:**',
                    value: `\`\`\`3.    14159 26535 89793 23846 26433 83279 50288 41971 69399 37510 58209 74944 59230 78164 06286 20899 86280 34825 34211 70679 82148 08651 32823 06647 09384 46095 50582 23172 53594 08128 48111 74502 84102 70193 85211 05559 64462 29489 54930 38196 44288 10975 66593 34461 28475 64823 37867 83165 27120 19091 45648 56692 34603 48610 45432 66482 13393 60726 02491 41273 72458 70066 06315 58817 48815 20920 96282 92540 91715 36436 78925 90360 01133 05305 48820 46652 13841 46951 94151 16094 33057 27036 57595 91953 09218 61173 81932 61179 31051 18548 07446 23799 62749 56735 18857 52724 89122 79381 83011 94912 98336 73362 44065 66430 86021 39494 63952 24737 19070 21798 60943 70277 05392 17176 29317 67523 84674 81846\`\`\``,
                    inline: true
                },
            )
            .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
        console.log(`%c[🥧] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}pi`,`color : #0AC032`)
}

module.exports.config = {
    name: "pi", 
    aliases: []
}   