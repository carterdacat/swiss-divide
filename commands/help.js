


module.exports = {
	name: 'help',
	description: 'displays a help message',
	execute(message) { 
        const db = require('quick.db')
        const { prefix } = require('./config.json')
        const Discord = require('discord.js');

     
let helpembed = new Discord.MessageEmbed()
.setColor('GREEN')
    .addFields(
        { name: `${prefix}helpmod`, value: `Shows help with moderation commands`,  }, 
         { name: `${prefix}helpfun`, value: `Shows help with fun commands`},
         {name: `${prefix}helpmisc`, value: `Misc. commands`},
         {name : `Need support?`, value: `Join the support server here https://discord.gg/wfQ37TM`}
      )

message.channel.send(helpembed)

    }
}