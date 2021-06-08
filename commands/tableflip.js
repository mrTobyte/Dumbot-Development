const Discord = require('discord.js') 
const moment = require('moment') 
const { prefix, token } = require('../botconfig.json');
const frames = [
	'(-°□°)-  ┬─┬',
	'(╯°□°)╯    ]',
	'(╯°□°)╯  ︵  ┻━┻',
	'(╯°□°)╯       [',
	'(╯°□°)╯           ┬─┬'
];

module.exports.run = async(client,message) =>{
    console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}tableflip`,`color : #0AC032`)
    const msg = await message.channel.send('(\\\\°□°)\\\\  ┬─┬');
    for (const frame of frames) {
        setTimeout(() => {}, 4000);
        await msg.edit(frame);
    }
    return message;    
}

module.exports.config = {
    name: "tableflip", 
    aliases: ['tf', "𝘁𝗮𝗯𝗹𝗲𝗳𝗹𝗶𝗽"] 
}