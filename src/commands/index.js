const pinturillo = require('./pinturillo');
const { canSendMessage } = require('../utils');
const { activeUsers, blockedBy } = require('../config');

/**
 * @type {CommandList}
 */
const commandList = {
  '!pinturillo': {
    invoke: pinturillo,
    restricted: true,
    lastInvokerId: '',
    defaultTimeout: 5000,
  }
};

const commandRegex = /^![\w]+/;

/**
 * @param {import('discord.js').Message} message Message to handle
 * @returns {import('discord.js').Client}
 */
module.exports = async (message) => {
  if (canSendMessage(message)) {
    if (commandRegex.test(message.content)) {
      const [messageCommand] = message.content.split(' ');
      // Valid command
      if (Object.prototype.hasOwnProperty.call(commandList, messageCommand)) {
        const command = commandList[messageCommand];
        if (command.restricted) {
          // User has requested a command before && check anti spam system
          if (Object.prototype.hasOwnProperty.call(activeUsers, message.author.id)
        && new Date().getTime() - activeUsers[message.author.id].lastMessageDate > command.defaultTimeout) {
            activeUsers[message.author.id].lastMessageDate = new Date().getTime();
          } else {
            activeUsers[message.author.id] = {
              id: message.author.id,
              message,
              lastMessageDate: new Date().getTime(),
            };
          }
        } else {
          commandList[messageCommand].invoke(message);
        }
      }
    }
  }
};

/**
 * @typedef {{[key: string]: Command}} CommandList
 */

/**
 * @typedef Command
 * @property {(message) => {}} invoke
 * @property {boolean} restricted
 * @property {string} lastInvokerId
 * @property {number} defaultTimeout
 */
