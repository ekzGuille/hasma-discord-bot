/**
 * @param {import('discord.js').Message} message Message to handle
 * @param {string} [invokerId] Previous invoker
 */
module.exports = async (message) => {
  return message.channel.send(`Te saludo ${message.author}`);
};
