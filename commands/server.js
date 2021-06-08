const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const Pages = require('discord-pages')

module.exports.run = async(client,message) =>{
    let onlines = message.guild.members.cache.filter(({
        presence
    }) => presence.status !== 'offline').size;
    let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;
    const filterLevels = {
        DISABLED: 'Off',
        MEMBERS_WITHOUT_ROLES: 'No Role',
        ALL_MEMBERS: 'Everyone'
    };
    const verificationLevels = { 
        NONE: 'None',
        LOW: 'Low',
        MEDIUM: 'Medium',
        HIGH: 'High',
        VERY_HIGH: 'Highest'
    }; 
    var emojis = message.guild.emojis.cache.map(emoji => emoji.toString() +' | ' +`\`:${emoji.name.toString()}:\``).join("\n").substr(0,1900);
    var totalemotes = `● There are **${message.guild.emojis.cache.size}** emotes on this server!\n \n${emojis}`
    if(!emojis || (emojis.length < 1) || !emojis.length) totalemotes = `❌|This server has no custom emoji.`;
    var roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString()).join("\n ").substr(0,1900);
    const e1 = new Discord.MessageEmbed()
    .setColor(2123412)
    .setTitle('🔎 • **General Overview**')
    .addField('❯ Name', `\`\`\`${message.guild.name}\`\`\``, true)
    await client.users.fetch(message.guild.ownerID)
    e1.addField('👤 Owner', `\`\`\`${client.users.cache.get(message.guild.ownerID).tag}\`\`\``, true)
	.addField('❯ Creation Date', `\`\`\`${moment.utc(message.guild.createdAt).format('MM/DD/YYYY')}\`\`\``, true)
    .addField('❯ Members', `\`\`\`${message.guild.memberCount}\`\`\``, true)
    .addField('❯ Online Members', `\`\`\`${onlines}\`\`\``, true)
    .addField('❯ Bots', `\`\`\`${totalbots}\`\`\``, true)
    const e2 = new Discord.MessageEmbed()
    
    .setColor(2123412)
    .setTitle('👥 • **Others**')
    .addField('🆔 ID', `\`\`\`${message.guild.id}\`\`\``, true)
	.addField('🌐 Region', `\`\`\`${message.guild.region.toUpperCase()}\`\`\``, true)
    .addField('💨 Boost Count', `\`\`\`Tier ${message.guild.premiumTier} (${message.guild.premiumSubscriptionCount}Boost)\`\`\`` || 0, true)
    .addField('🔰 Verification Level', `\`\`\`${verificationLevels[message.guild.verificationLevel]}\`\`\``, true)
    .addField('📌 Channels', `\`\`\`${message.guild.channels.cache.filter(channel => channel.type !== 'category').size}\`\`\``, true)
    const e3 = new Discord.MessageEmbed()
    .setColor(2123412)
    .setTitle('💡 • **Roles List**')
    .setDescription(`● There is **${message.guild.roles.cache.size}** roles on this server!\n \n${roles}`)
    const e4 = new Discord.MessageEmbed()
    .setColor(2123412)
    .setTitle('😀 • **Emojis List**')
    .setDescription(`${totalemotes}`)
    
    const e = new Pages({
        channel : message.channel,
        pages : [e1,e2,e3,e4]
        })
        e.createPages()
        console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}server`,`color : #0AC032`)
        
}


module.exports.config = {
    name: "server", 
    aliases: ["𝘀𝗲𝗿𝘃𝗲𝗿"]
}