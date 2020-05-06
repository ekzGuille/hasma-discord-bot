const Discord = require('discord.js');
const { env } = require('./config');
const messageHandler = require('./commands');

const client = new Discord.Client();


client.once('ready', () => {
  console.log('corriendo como Forrest Gump...');
});

client.on('message', messageHandler);

client.login(env.DISCORD_BOT_TOKEN);
