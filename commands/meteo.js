const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const weather = require('weather-js');

module.exports.run = async(client,message) =>{
    const messageArray = message.content.split(' ');
	const args = messageArray.slice(0);
    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        if(error) return message.channel.send(error);      
        if(!args[1]) {
            message.react('❌');
            console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}meteo`,`color : #E01E03`)
            return message.channel.send({
                embed: {
                    thumbnail: {
                        url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                    },
                    color: 2123412,
                    description: (`**🔎|Command:** \`meteo\`\n**ERROR:** \`❌ ► Please specify a Location\`\n**Description:** \`Tell you the meteo.\`\n \n**Syntax:** \`=meteo <city>\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            }); 
        }

        if(result.length === 1 || !result[0]) {
            message.react('❌');
            console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}meteo`,`color : #E01E03`)
            return message.channel.send({
                embed: {
                    thumbnail: {
                        url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                    },
                    color: 2123412,
                    description: (`**🔎|Command:** \`meteo\`\n**ERROR:** \`❌ ► Unknow Location\`\n**Description:** \`Tell you the meteo.\`\n \n**Syntax:** \`=meteo <city>\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            }); 
        }
        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed() 
            .setAuthor(`Here is the meteo of ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor(2123412)
            .addField('State', `\`\`\`${current.skytext}\`\`\``, true)
            .addField('Temperature', `\`\`\`${current.temperature}°C\`\`\``, true)
            .addField('Wind', `\`\`\`${current.winddisplay}\`\`\``, false)
            .addField('Feels like', `\`\`\`${current.feelslike}°C\`\`\``, true)
            .addField('Humidity', `\`\`\`${current.humidity}%\`\`\``, true)
            .setFooter('© DUMBOT', client.user.avatarURL())
        message.channel.send(weatherinfo)
        console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}meteo`,`color : #0AC032`)
    })        
}

module.exports.config = {
    name: "meteo", 
    aliases: ["𝗺𝗲𝘁𝗲𝗼"]
}