const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("623501541088690186")
setInterval(function() {
channel.send(`طيز سكنر فء`);
}, 30)
})

client.login(process.env.BOT_TOKEN);