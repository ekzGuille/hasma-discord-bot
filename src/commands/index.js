const pinturillo = require('./pinturillo');
const hola = require('./hola');
const { canSendMessage } = require('../utils');

/** @type {import('./../config').UserMap} */
const activeUsers = {};

/**
 * @type {import('./../config').CommandList}
 */
const commandList = {
  hola: {
    invoke: hola,
  },
  // '!pinturillo': {
  //   invoke: pinturillo,
  //   restricted: true,
  //   lastInvokerId: null,
  //   defaultTimeout: 8000,
  // },
};

const commandRegex = /^[\w]+/;

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
          /*
          TODO:
          Como sabemos que el comando es restringido primero mirar que ultimo que ha invocado al bot sea el mismo que esta invocandolo ahora
            * En caso de que si sea el mismo quiere decir que esta configurando los ajustes de la partida
            por lo que no tendra restriccion de tiempo.

            Sino tendra que esperar X tiempo (el defaultTimeout) hasta que pueda probar que el bot esta libre
            Ahí se comprobara si ha sido usuario nuevo o no

          */

          // User has requested a command before
          if (Object.prototype.hasOwnProperty.call(activeUsers, message.author.id)) {
            //  check anti spam system
            //  if (new Date().getTime() - activeUsers[message.author.id].lastMessageDate < command.defaultTimeout) { // Metodo viejo
            if (activeUsers[message.author.id].lastMessageDate + command.defaultTimeout < new Date().getTime()) {
              return message.channel.send(`Espera un poquito ${message.author} plis`);
            }
          } else {
            activeUsers[message.author.id] = {
              id: message.author.id,
              message,
              lastMessageDate: new Date().getTime(),
            };
          }
          // TODO: Este if tiene que ir arriba del todo, como comprobacion primera que se salte los timeouts
          if (command.lastInvokerId === message.author.id) {
            command.lastInvokerId = await commandList[messageCommand].invoke(message, command.lastInvokerId);
            /* command.lastInvokerId = null; */ // NOTE: esto lo hara la funcion al final de la ejecucion
          } else {
            return message.channel.send('Estoy ocupao!');
          }
          // TODO: Hacer la magia
          console.log('magia');
          activeUsers[message.author.id].lastMessageDate = new Date().getTime();
        } else {
          return commandList[messageCommand].invoke(message);
        }
      }
    }
  }
};
