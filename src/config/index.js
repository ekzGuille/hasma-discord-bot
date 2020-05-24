require('dotenv').config();

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
 * @typedef ScrapConfig
 * @property {RoundAmountEnum} roundAmount
 * @property {DrawingTimeEnum} drawingTime
 * @property {LanguageEnum} language
 */

/** @typedef {{[key: number]: string}} RoundAmountEnum */
const RoundAmountEnum = {
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
};
Object.freeze(RoundAmountEnum);

/** @typedef {{[key: number]: string}} DrawingTimeEnum */
const DrawingTimeEnum = {
  30: '30',
  40: '40',
  50: '50',
  60: '60',
  70: '70',
  80: '80',
  90: '90',
  100: '100',
  110: '110',
  120: '120',
  130: '130',
  140: '140',
  150: '150',
  160: '160',
  170: '170',
  180: '180',
};
Object.freeze(DrawingTimeEnum);

/** @typedef {{[key: string]: string}} LanguageInfo */
/** @typedef {{[key: string]: LanguageInfo}} LanguageEnum */
const LanguageEnum = {
  English: {
    flag: '🇬🇧',
    language: 'English',
  },
  German: {
    flag: '🇩🇪',
    language: 'German',
  },
  Bulgarian: {
    flag: '🇧🇬',
    language: 'Bulgarian',
  },
  Czech: {
    flag: '🇨🇿',
    language: 'Czech',
  },
  Danish: {
    flag: '🇩🇰',
    language: 'Danish',
  },
  Dutch: {
    flag: '🇳🇱',
    language: 'Dutch',
  },
  Finnish: {
    flag: '🇫🇮',
    language: 'Finnish',
  },
  French: {
    flag: '🇫🇷',
    language: 'French',
  },
  Estonian: {
    flag: '🇪🇪',
    language: 'Estonian',
  },
  Greek: {
    flag: '🇬🇷',
    language: 'Greek',
  },
  Hebrew: {
    flag: '🇮🇱',
    language: 'Hebrew',
  },
  Hungarian: {
    flag: '🇭🇺',
    language: 'Hungarian',
  },
  Italian: {
    flag: '🇮🇹',
    language: 'Italian',
  },
  Korean: {
    flag: '🇰🇷',
    language: 'Korean',
  },
  Latvian: {
    flag: '🇱🇹',
    language: 'Latvian',
  },
  Macedonian: {
    flag: '🇲🇰',
    language: 'Macedonian',
  },
  Norwegian: {
    flag: '🇳🇴',
    language: 'Norwegian',
  },
  Portuguese: {
    flag: '🇵🇹',
    language: 'Portuguese',
  },
  Polish: {
    flag: '🇵🇱',
    language: 'Polish',
  },
  Romanian: {
    flag: '🇷🇴',
    language: 'Romanian',
  },
  Serbian: {
    flag: '🇷🇸',
    language: 'Serbian',
  },
  Slovakian: {
    flag: '🇸🇰',
    language: 'Slovakian',
  },
  Spanish: {
    flag: '🇪🇸',
    language: 'Spanish',
  },
  Swedish: {
    flag: '🇸🇪',
    language: 'Swedish',
  },
  Tagalog: {
    flag: '🇵🇭',
    language: 'Tagalog',
  },
  Turkish: {
    flag: '🇹🇷',
    language: 'Turkish',
  },
};
Object.freeze(LanguageEnum);


module.exports = {
  env,
  LanguageEnum,
  RoundAmountEnum,
  DrawingTimeEnum,
};
