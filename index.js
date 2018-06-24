const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login('NDYwNDk5NDU0MjUyODEwMjUw.DhFrNA.eebj_YLxVLafibucgYo5EQYC3cA')

bot.on("ready", () => { //On dis que quand le bot est prêt, on va faire une action.
    bot.user.setStatus("dnd") //Le bot va se mettre en mode ne pas déranger
    bot.user.setGame("Dite Alexa", "https://www.twitch.tv/mehdigameone") //Va mettre le bot en streaming avec le jeu séléctionner (dans les premiers "")
    console.log("Prêt") //On va dire au bot de mettre "Prêt" dans la console
   }) //On termine les instruction

   /*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDYwNDk5NDU0MjUyODEwMjUw.DhFrNA.eebj_YLxVLafibucgYo5EQYC3cA';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'Dite Alexa') {
    // Send "pong" to the same channel
    message.channel.send('Comment puis-je vous aider ?');
  }
});

// Log our bot in
client.login(token);