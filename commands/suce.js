const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const bdd = require('./bdd.json');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports.run = async(client,message) =>{

var ui
    var nb = getRandomInt(33)
    if (nb==0){ui = bdd.gif0}
    if (nb==1){ui = bdd.gif1}
    if (nb==2){ui = bdd.gif2}
    if (nb==3){ui = bdd.gif3}
    if (nb==4){ui = bdd.gif4}
    if (nb==5){ui = bdd.gif5}
    if (nb==6){ui = bdd.gif6}    
    if (nb==7){ui = bdd.gif7}  
    if (nb==8){ui = bdd.gif8}  
    if (nb==9){ui = bdd.gif9}  
    if (nb==10){ui = bdd.gif10}  
    if (nb==11){ui = bdd.gif11}  
    if (nb==12){ui = bdd.gif12}  
    if (nb==13){ui = bdd.gif13}  
    if (nb==14){ui = bdd.gif14}  
    if (nb==15){ui = bdd.gif15}  
    if (nb==16){ui = bdd.gif16} 
    if (nb==17){ui = bdd.gif17} 
    if (nb==18){ui = bdd.gif18} 
    if (nb==19){ui = bdd.gif19} 
    if (nb==20){ui = bdd.gif20} 
    if (nb==21){ui = bdd.gif21} 
    if (nb==22){ui = bdd.gif22} 
    if (nb==23){ui = bdd.gif23} 
    if (nb==24){ui = bdd.gif24} 
    if (nb==25){ui = bdd.gif25} 
    if (nb==26){ui = bdd.gif26} 
    if (nb==27){ui = bdd.gif27} 
    if (nb==28){ui = bdd.gif28} 
    if (nb==29){ui = bdd.gif29} 
    if (nb==30){ui = bdd.gif30} 
    if (nb==31){ui = bdd.gif31} 
    if (nb==32){ui = bdd.gif32} 
    if (nb==33){ui = bdd.gif33}
    if (nb==34){ui = bdd.gif34}
    if (nb==35){ui = bdd.gif35}




    message.channel.send({
        embed: {
            color: 2123412,
            image: {
                url: `${ui}`
            },
            timestamp: new Date(),
            description: (`*HUM HUM*`),
            footer: {
                icon_url: client.user.avatarURL(),
                text: "© Pijon#1415"
            }
        }
    });
    console.log(`%c[👅] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}suce`,`color : #BA0A0A`)
}

module.exports.config = {
    name: "suce", 
    aliases: []
}