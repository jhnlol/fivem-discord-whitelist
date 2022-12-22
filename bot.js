const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const scriptname = GetCurrentResourceName()

client.on("ready", () => {
  console.log('bot on')
  client.user.setActivity('JHN IS BO$$')
  onlinelog()
})
function getUser(id) { 
    let guild = client.guilds.get(config.guildid)
    let member = guild.members.get(id)
    if(!member) return false; else return true
}
function onlinelog() { // logi wlaczania
    var dzisiaj = new Date();
    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth()+1;
    var rok = dzisiaj.getFullYear();
    var godzina = dzisiaj.getHours();
    var minuty = dzisiaj.getMinutes();
    var sekunda = dzisiaj.getSeconds();
    const embed = new Discord.RichEmbed().setAuthor('JHN WL SYSTEM').setTitle("Bot Został Uruchomiony").setColor('#00ff48').setDescription("```"+`Bot Został Uruchomiony o godzinie: ${godzina}:${minuty} | ${dzien}/${miesiac}/${rok}`+"```").setTimestamp()
    let message = `Bot został uruchomiony o godzinie: ${godzina}:${minuty} | ${dzien}/${miesiac}/${rok}`
    let channel = client.channels.get(config.logi)
    channel.send(embed)
}
function wejscielog(message) {
    const embed = new Discord.RichEmbed().setAuthor('JHN KOLEJKA').setTitle("Wejscie Na Serwer!").setColor('#00ff48').setDescription("```"+message+"```").setTimestamp()
    let channel = client.channels.get(config.logi)
    channel.send(embed)
}
function checkRole(uid) { 
    let cwelik = false;
    let guild = client.guilds.get(config.guildid);
    if(guild.members.get(uid).roles.get(config.roleid)) cwelik = true ;
    return cwelik;
};
function login() {
    client.login(config.token).catch(() => { console.log(GetCurrentResourceName()+": Token bota jest nie prawidłowy!")})
}

module.exports = { checkRole, getUser, login, wejscielog}