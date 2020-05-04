const Discord = require('discord.js');
const { env } = require('./config');
const { canSendMessage } = require('./utils');

const client = new Discord.Client();


client.once('ready', () => {
  console.log('corriendo como Forrest Gump...');
});

client.on('message', async (message) => {
  if (canSendMessage(message)) {
    if (message.content === 'ey') {
      await message.reply('Marchandoo');
      await message.channel.send('Relax');
    }
  }
});

client.login(env.DISCORD_BOT_TOKEN);
