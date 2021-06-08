const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const fetch = require('node-fetch');
const QuickChart = require('quickchart-js');

module.exports.run = async(client,message) =>{
    let  args = message.content.substring(`${prefix}`.length).split(" ");
	    let country;
	    if (args[0] === 'covid') {
            if(args[0].length > 50) {
                console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}covid`,`color : #E01E03`)
                message.react('❌');
                return message.channel.send({
                    embed: {
                        thumbnail: {
                            url: "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/247/358/datas/original.png",
                        },
                        color: 2123412,
                        timestamp: new Date(),
                        description: (`**🔎|Command:** \`covid\`\n**ERROR:** \`❌ ► Invalid Country\`\n**Description:** \`Give you the covid-19 statistics\nof the chosen country.\`\n \n**Syntax:** \`=covid <country>\` \n \n`),
                        footer: {
                            icon_url: client.user.avatarURL(),
                            text: (`© DUMBOT`)
                        }
                    }
                });
            }
		if (!args[1]) {
            console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}covid`,`color : #E01E03`)
            message.react('❌');
            return message.channel.send({
                embed: {
                    thumbnail: {
                        url: "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/247/358/datas/original.png",
                    },
                    color: 2123412,
                    timestamp: new Date(),
                    description: (`**🔎|Command:** \`covid\`\n**ERROR:** \`❌ ► Syntax\`\n**Description:** \`Give you the covid-19 statistics\nof the chosen country.\`\n \n**Syntax:** \`=covid <country>\` \n \n`),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            });
		} else {
            console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}covid`,`color : #0AC032`)
            message.react('😷');
            country = args[1]
        }
    const url = `https://corona.lmao.ninja/v2/countries/${country}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            var Pcas = (`${data.cases*100/`${data.population}`}`)
            var Pmort = (`${data.deaths*100/`${data.population}`}`)
            const chart = new QuickChart();
            chart
            .setConfig({
                type: "bar",
                data: {
                  labels: ["Cases", "Deaths",],
                  datasets: [{
                      backgroundColor: ["#1BADEE", "#EE4E1B", "#EE911B"],
                      data: [data.cases, data.deaths]
                  }]
                },
                options: {
                    title: {
                        position: 'bottom',
                        display: true,
                        text: '© DUMBOT'
                    },
                    plugins: {
                      legend: false,
                      outlabels: {
                        text: "%l %p",
                        color: "white",
                        stretch: 35,
                        font: {
                          resizable: true,
                          minSize: 12,
                          maxSize: 18
                        }
                    },
                }
            }
            })
            .setBackgroundColor('transparent')
            .setWidth(500)
            .setHeight(300);  
            if (data.message) {
                message.reply(data.message);
            } else {
                const embed = new Discord.MessageEmbed()
                .setTitle (`**COVID19 | STATISTICS**`)
                .setFooter('© DUMBOT')
                .setTimestamp() 
                .setColor(2123412)
                .addField('🗺️ • **COUNTRY**', `\`\`\`${virgule(data.country)}\`\`\``, true)
                .addField('😷 • **CASES**', `\`\`\`${virgule(data.cases)} (${virgule((Pcas).substr(0,3))}%)\`\`\``, true)
                .addField('👻 • **DEATHS**', `\`\`\`${virgule(data.deaths)} (${virgule((Pmort).substr(0,3))}%)\`\`\``, true)
                .addField('🤢 • **ACTIVE CASES**', `\`\`\`${virgule(data.active)}\`\`\``, true)
                .addField('💉 • **TESTED**', `\`\`\`${virgule(data.tests)}\`\`\``, true)
                .setImage(chart.getUrl())
        message.channel.send(embed)
            }
        });
}}

module.exports.config = {
    name: "covid", 
    aliases: ["cvd", "𝗰𝗼𝘃𝗶𝗱"]
}

function virgule(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
}