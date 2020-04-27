const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("704125497235341385")
setInterval(function() {
channel.send(`سلام عليكم يههييهيه`);
}, 30)
})

client.login(process.env.BOT_TOKEN);