const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    const arguments = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = arguments.shift().toLowerCase();
    if (!arguments.length) {
        message.react('❌');
        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}8ball`,`color : #E01E03`)
        return message.channel.send({
            embed: {
                thumbnail: {
                    url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                },
                color: 2123412,
                description: (`**🔎|Command:** \`8ball\`\n**ERROR:** \`❌ ► Syntax\`\n**Description:** \`Random Answer\`\n \n**Syntax:** \`\`\`=8ball <question>\`\`\``),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: (`© DUMBOT`)
                }
            }
        });
    }
    if(arguments[0].length > 50) {
        message.react('❌');
        console.log(`%c[❌] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}8ball`,`color : #E01E03`)
        return message.channel.send({
            embed: {
                thumbnail: {
                    url: "http://www.pngall.com/wp-content/uploads/5/Help-Logo-PNG-Picture.png",
                },
                color: 2123412,
                description: (`**🔎|Command:** \`8ball\`\n**ERROR:** \`❌ ► Too much caracters.\`\n**Description:** \`Random Answer\`\n \n**Syntax:** \`\`\`=8ball <question>\`\`\``),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: (`© DUMBOT`)
                }
            }
        });
    }
    if (message.content.startsWith(`${prefix}8ball`)) {
        var nb = Math.round(Math.random() * 11);
        if (nb == 1) {
            console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}8ball`,`color : #0AC032`)
			message.react('🔮');
            message.channel.send({
                embed: {
                    title: (`${message.author.username}'𝘀  𝟴𝗯𝗮𝗹𝗹`),
                    thumbnail: {
                        url: "https://static.wikia.nocookie.net/battlefordreamisland/images/0/09/8ballbfdi.png/revision/latest?cb=20200207233717",
                    },
                    color: 2123412,
                    description: (`\n \n \n**🎱Question:**\n*"${arguments.join(" ")}"*\n**🎱The magic ball said:**\n\`Yes!\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
				}
            });
		}
		if (nb == 2) {
            message.react('🔮');
            console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}8ball`,`color : #0AC032`)
            message.channel.send({
                embed: {
                    title: (`${message.author.username}'𝘀  𝟴𝗯𝗮𝗹𝗹`),
                    thumbnail: {
                        url: "https://static.wikia.nocookie.net/battlefordreamisland/images/f/ff/8-Ball_IDFB_Pose.png/revision/latest/top-crop/width/300/height/300?cb=20180408024613",
                    },
                    color: 2123412,
                    description:  (`\n \n \n**🎱Question:**\n\`"${arguments.join(" ")}"\`\n**🎱The magic ball said:**\n\`Without a doubt!\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            });
		}
		if (nb == 3) {
            message.react('🔮');
            console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}8ball`,`color : #0AC032`)
            message.channel.send({
                embed: {
                    title: (`${message.author.username}'𝘀  𝟴𝗯𝗮𝗹𝗹`),
                    thumbnail: {
                        url: "https://static.wikia.nocookie.net/battlefordreamisland/images/8/8d/8-Ball_scared.png/revision/latest/scale-to-width-down/1000?cb=20180705234813",
                    },
                    color: 2123412,
                    description:  (`\n \n \n**🎱Question:**\n\`"${arguments.join(" ")}"\`\n**🎱The magic ball said:**\n\`No way!\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            });
		}
		if (nb == 4) {
            message.react('🔮');
            console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}8ball`,`color : #0AC032`)
            message.channel.send({
                embed: {
                    title: (`${message.author.username}'𝘀  𝟴𝗯𝗮𝗹𝗹`),
                    thumbnail: {
                        url: "https://vignette.wikia.nocookie.net/battleforparidiseisland/images/8/8a/8-Ball.png/revision/latest?cb=20170521145704",
                    },
                    color: 2123412,
                    description:  (`\n \n \n**🎱Question:**\n\`"${arguments.join(" ")}"\`\n**🎱The magic ball said:**\n\`Of course bro :)\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            });
		}
		if (nb == 5) {
            message.react('🔮');
            console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}8ball`,`color : #0AC032`)
            message.channel.send({
                embed: {
                    title: (`${message.author.username}'𝘀  𝟴𝗯𝗮𝗹𝗹`),
                    thumbnail: {
                        url: "https://static.wikia.nocookie.net/battlefordreamisland/images/8/88/8-Ball_getting_recovered.png/revision/latest/scale-to-width-down/474?cb=20200213134121",
                    },
                    color: 2123412,
                    description:  (`\n \n \n**🎱Question:**\n\`"${arguments.join(" ")}"\`\n**🎱The magic ball said:**\n\`It's off to a good start\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            });
		}
		if (nb == 6) {
            message.react('🔮');
            console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}8ball`,`color : #0AC032`)
            message.channel.send({
                embed: {
                    title: (`${message.author.username}'𝘀  𝟴𝗯𝗮𝗹𝗹`),
                    thumbnail: {
                        url: "https://static.wikia.nocookie.net/battlefordreamisland/images/9/97/BAITBALLIO.png/revision/latest/scale-to-width-down/1000?cb=20190704001828",
                    },
                    color: 2123412,
                    description:  (`\n \n \n**🎱Question:**\n\`"${arguments.join(" ")}"\`\n**🎱The magic ball said:**\n\`I don't know..\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            });
		}
		if (nb == 7) {
            message.react('🔮');
            console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}8ball`,`color : #0AC032`)
            message.channel.send({
                embed: {
                    title: (`${message.author.username}'𝘀  𝟴𝗯𝗮𝗹𝗹`),
                    thumbnail: {
                        url: "https://static.wikia.nocookie.net/battlefordreamisland/images/3/3d/BAITBALL.png/revision/latest/scale-to-width-down/1000?cb=20190704001813",
                    },
                    color: 2123412,
                    description:  (`\n \n \n**🎱Question:**\n\`"${arguments.join(" ")}"\`\n**🎱The magic ball said:**\n\`Sure!\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            });
        }
        if (nb == 8) {
            message.react('🔮');
            console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}8ball`,`color : #0AC032`)
            message.channel.send({
                embed: {
                    title: (`${message.author.username}'𝘀  𝟴𝗯𝗮𝗹𝗹`),
                    thumbnail: {
                        url: "https://static.wikia.nocookie.net/battlefordreamisland/images/3/3a/8-Ballmad.png/revision/latest/scale-to-width-down/1000?cb=20181027051420",
                    },
                    color: 2123412,
                    description:  (`\n \n \n**🎱Question:**\n\`"${arguments.join(" ")}"\`\n**🎱The magic ball said:**\n\`No!\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            });
		}
		if (nb == 9) {
            message.react('🔮');
            console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}8ball`,`color : #0AC032`)
            message.channel.send({
                embed: {
                    title: (`${message.author.username}'𝘀  𝟴𝗯𝗮𝗹𝗹`),
                    thumbnail: {
                        url: "https://static.wikia.nocookie.net/battlefordreamisland/images/2/2d/Reith_ball.png/revision/latest/scale-to-width-down/197?cb=20191004195936",
                    },
                    color: 2123412,
                    description:  (`\n \n \n**🎱Question:**\n\`"${arguments.join(" ")}"\`\n**🎱The magic ball said:**\n\`MMmmmmmmmmmh.... Naaa!!\``),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            });
        }
        if (nb == 10) {
            message.react('🔮');
            console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}8ball`,`color : #0AC032`)
            message.channel.send({
                embed: {
                    title: (`${message.author.username}'𝘀  𝟴𝗯𝗮𝗹𝗹`),
                    thumbnail: {
                        url: "https://static.wikia.nocookie.net/battlefordreamisland/images/8/83/BALL1.png/revision/latest/scale-to-width-down/880?cb=20190628235017",
                    },
                    color: 2123412,
                    description:  (`\n \n \n**🎱Question:**\n\`"${arguments.join(" ")}"\`\n**🎱The magic ball said:**\n***\`I prefer not to answer.\`***`),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            });
		}
		if (nb == 11) {
            message.react('🔮');
            console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}8ball`,`color : #0AC032`)
            message.channel.send({
                embed: {
                    title: (`${message.author.username}'𝘀  𝟴𝗯𝗮𝗹𝗹`),
                    thumbnail: {
                        url: "https://vignette.wikia.nocookie.net/battleforparidiseisland/images/8/8a/8-Ball.png/revision/latest?cb=20170521145704",
                    },
                    color: 2123412,
                    description:  (`\n \n \n**🎱Question:**\n\`"${arguments.join(" ")}"\`\n**🎱The magic ball said:**\n***\`And it's a big YES !!!\`***`),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: (`© DUMBOT`)
                    }
                }
            });
        }
    }
}

module.exports.config = {
    name: "8ball", 
    aliases: ["ball", "𝟴𝗯𝗮𝗹𝗹"]
}