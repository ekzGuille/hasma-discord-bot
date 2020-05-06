require('dotenv').config();


/**
 * @typedef ENV
 * @property {string} DISCORD_BOT_TOKEN Token of the Discord bot
 * @property {string} ALLOWED_CHANNELS Allowed channels where the bot can send messagse
 * @property {string} ALLOWED_DISCORD_SERVERS Allowed servers where the bot can join
 */

/**
 * @type {ENV}
 */
const env = {
  ...process.env,
};

/**
 * @typedef {{[key: string]: User}} UserMap
 */

/**
 * @typedef {import('discord.js').Message} Message
 */

/**
 * @typedef User
 * @property {string} id
 * @property {Date} lastMessageDate
 * @property {Message} message
 */

/**
 * @type {UserMap}
 */
const activeUsers = {};

/**
 * @typedef BotBlock
 * @property {string} id
 * @property {boolean} blocked
 */

/**
 * @type {BotBlock}
 */
const blockedBy = {};

module.exports = {
  env,
  activeUsers,
  blockedBy,
};
