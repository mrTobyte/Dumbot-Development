const Discord = require('discord.js')
const moment = require('moment');
const { prefix, token } = require('../botconfig.json');

module.exports.run = async(client,message) =>{
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);
    if(!["..."].some(id => message.author.id === id)) return;
    const clean = text => {
    if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
}
      try {

    const code = args.slice().join(" ");
    let evaled = eval(code);

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);
    message.channel.send(`\`SUCESS\` \`\`\`xl\n${clean(evaled)}\n\`\`\``);
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
}

module.exports.config = {
    name: "eval", 
    aliases: ["e"]
}
