require('dotenv').config();

/**
 * @typedef ENV
 * @property  {string} DISCORD_BOT_TOKEN Token of the Discord bot
 * @property {string}  ALLOWED_CHANNELS Allowed channels where the bot can send messagse
 * @property {string}  ALLOWED_DISCORD_SERVERS Allowed servers where the bot can join
 */

/**
 * @type {ENV}
 */
const env = {
  ...process.env,
};

module.exports = {
  env,
};
