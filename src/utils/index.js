const { env } = require('../config');

/**
 * @param {string} stringVariable Comma separated value to transofrm into an array
 */
const commaStringToArray = (stringVariable) => {
  if (!stringVariable) return [];
  return stringVariable.split(',').reduce((prev, cur) => {
    const trimmed = cur.trim();
    if (trimmed !== '') {
      prev.push(trimmed);
    }
    return prev;
  }, []);
};

const allowedChannels = commaStringToArray(env.ALLOWED_CHANNELS);
const allowedServers = commaStringToArray(env.ALLOWED_DISCORD_SERVERS);

/**
 * Guilt (server) and channel validation
 * @param {import('discord.js').Message} message Message to validate
 * @returns {boolean}
 */
const canSendMessage = (message) => allowedChannels.indexOf(message.channel.id) !== -1
      && allowedServers.indexOf(message.guild.id) !== -1;


module.exports = {
  commaStringToArray,
  canSendMessage,
};
