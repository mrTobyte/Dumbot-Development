const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const chooseArr = ["🗻", "📰", "✂️"];
const promptMessage = async function (message, author, time, validReactions) {
    time *= 1000;
    for (const reaction of validReactions) await message.react(reaction);
    const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && user.id === author.id;
    return message
        .awaitReactions(filter, { max: 1, time: time})
        .then(collected => collected.first() && collected.first().emoji.name);
}

module.exports.run = async(client,message) =>{
    console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}rps`,`color : #0AC032`)
    const embed = new Discord.MessageEmbed()
        .setColor(2123412)
        .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
        .setDescription("**Add a reaction to one of these emojis to play the game!**")
        .setFooter('© DUMBOT', `${message.author.avatarURL()}`)

        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.clearReactions;

        embed
            .setDescription("")
            .addField(result, `\`\`\`${reacted} vs ${botChoice}\`\`\``);

        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂️") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂️" && clientChosen === "📰")) {
                    return "**🎉You won!**";
            } else if (me === clientChosen) {
                return "⚖️It's a tie!";
            } else {
                return "❌You lost!";
            } 
        }
}

module.exports.config = {
    name: "rps", 
    aliases: ["𝗿𝗽𝘀"]
}