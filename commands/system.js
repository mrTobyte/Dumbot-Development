const Discord = require('discord.js')
const moment = require('moment')
const { prefix, token } = require('../botconfig.json');
const os = require('os')
const cpuStat = require("cpu-stat");
var osu = require('node-os-utils')


module.exports.run = async(client,message) =>{
    const notSupported = "The operating system used to host this bot is not supported for this command."
      const full = '▰'
      const empty = '▱'
      const precision = 20
      
      const freeRAM = os.freemem()
      const usedRAM = os.totalmem() - freeRAM;
      
      const diagramMaker = (used, free) => {
        const total = used + free;
        used = Math.round((used / total) * precision)
        free = Math.round((free / total) * precision)
        return full.repeat(used) + empty.repeat(free)
      }
      
      let cpuUsage;
      
      const p1 = osu.cpu.usage().then(cpuPercentage => {
        cpuUsage = cpuPercentage;
      })
      
      let processes;
      
      const p2 = osu.proc.totalProcesses().then(process => {
        processes = process;
      })
      
      let driveUsed, driveFree;
      
      const p3 = osu.drive.info().then(i => {
        driveUsed = i.usedPercentage;
        driveFree = i.freePercentage;
      }).catch(() => {
        driveUsed = false;
      })
      
      let networkUsage, networkUsageIn, networkUsageOut;
      
      const p4 = osu.netstat.inOut().then(i => {
        networkUsage = i.total;
        networkUsageIn = networkUsage.inputMb;
        networkUsageOut = networkUsage.outputMb;
      }).catch(() => {
        networkUsage = false;
      })
      
      await Promise.all([p1, p2, p3, p4]);
      const embed = new Discord.MessageEmbed()
        .setColor(2123412)
        .setThumbnail("https://cdn.discordapp.com/attachments/784328675109765141/788814443089231902/unknown.png")
        .setTitle('**__Here is Dumbot System!__**')
        .addField(`• Main Package Version:`, `Discord.js Version: 12.2.0\nDiscord.js-Commando Version: 0.10.0\nNode.js Version: 12.x`)
        .addField(`• Used:`,(`RAM: ${diagramMaker(usedRAM, freeRAM)} [${Math.round(100 * usedRAM / (usedRAM + freeRAM))}%]\n`+ (`CPU: ${diagramMaker(cpuUsage, 100-cpuUsage)} [${Math.round(cpuUsage)}%]`)))
        .addField("• Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
        .addField(`• Machine Specs:`,`CPU Count: ${osu.cpu.count()}\nCPU Model: ${os.cpus()[0].model}\nCPU Speed: ${os.cpus()[0].speed}MHz
    ${osu.os.platform() != "win32" ? `Storage: ${diagramMaker(driveUsed,driveFree)} [${driveUsed}%]`: ""}`)
        .addField(`• System Specs:`,`System Type: ${osu.os.type()}\nSystem Architecture: ${osu.os.arch()}\nSystem Platform: ${osu.os.platform()}`)
        .setTimestamp()
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
        
      message.channel.send(embed);
      console.log(`%c[💬] ${moment(Date.now()).local("fr").format("DD/MM/YYYY HH:mm")}  :  ${message.author.username} (${message.author.id}) sur ${message.guild.name}  ➜  ${prefix}system`,`color : #0AC032`)
}

module.exports.config = {
    name: "system", 
    aliases: []
}   