
const lanzarMenu = () => {
  console.log('Menu');
};

const lanzarOpciones = () => {
  console.log('Opciones');
};


/**
 * @param {import('discord.js').Message} message Message to handle
 * @param {string} [invokerId] Previous invoker
 * @returns {import('discord.js').Client}
 */
module.exports = async (message, invokerId) => {
  if (!invokerId) {
    lanzarMenu();
  }
  lanzarOpciones();

  // Cuando acaba la id es null para que se pueda volver a invocar
  invokerId = null;
  return invokerId;
};
