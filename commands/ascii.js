const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const figlet = require("figlet")

module.exports.run = async(client,message) =>{
    const args = message.content.split(' ').slice(1);
    if(!args[0]) {
        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}ascii`,`color : #E01E03`)
        return message.channel.send({
            embed: {
                color: 2123412,
                description: (`**🔎|Command:** \`ascii\`\n**ERROR:** \`❌ ► Please provide some text\`\n**Description:** \`Convert every text into ASCII characters.\`\n \n**Syntax:** \`\`\`=ascii <text>\`\`\``),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: (`© DUMBOT`)
                }
            }
        });
    }

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            }
            if(data.length > 500) {
                console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}ascii`,`color : #E01E03`)
                return message.channel.send('Please provide a smaller text than this.');
            }
            message.channel.send(`\`\`\`${data}\`\`\``);
            console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}ascii`,`color : #0AC032`)
        });
}

module.exports.config = {
    name: "ascii", 
    aliases: ["𝗮𝘀𝗰𝗶𝗶"]
}