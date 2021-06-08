const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const { MessageEmbed } = require('discord.js');

module.exports.run = async(client,message) =>{
    var randColor = Math.floor(Math.random()*16777215).toString(16);
    message.channel.send({
        embed: {
            color: Math.floor(Math.random() * 16777214) + 1,  
            description: `**__Random color generated:__**\n **${randColor}**\n**0x${randColor.toString(16).toUpperCase()}**`
        }
    });
};

module.exports.config = {
    name: "randomcolor", 
    aliases: ["rdmclr", "rc"]
}