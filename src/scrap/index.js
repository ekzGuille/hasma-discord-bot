const puppeteer = require('puppeteer');
const { sendMessage } = require('../utils');

const botWaitingTimeout = 15000;

/**
 * Scrapping action
 * @param {import('discord.js').Message} message
 * @param {import('./../config').ScrapConfig} scrapConfig
 */
const scrap = async (message, scrapConfig) => {
  let scrapResponse = {};
  let page;
  try {
    const browser = await puppeteer.launch({ headless: false }); // false para ver el Chromium
    page = await browser.newPage();
    await page.goto('https://skribbl.io/');
    await page.$eval('#buttonLoginCreatePrivate', (el) => el.click());

    /* Inicio ajustar configuracion */

    // Rondas
    // document.querySelector("#lobbySetRounds").value='3';
    await page.$eval('#lobbySetRounds', (el) => {
      console.log(el.value);
    });

    // Tiempo ronda
    // document.querySelector("#lobbySetDrawTime").value='80':
    await page.$eval('#lobbySetDrawTime', (el) => {
      console.log(el.value);
    });

    // Idioma
    // document.querySelector("#lobbySetLanguage").value='English'
    await page.$eval('#lobbySetDrawTime', (el) => {
      console.log(el.value);
    });

    /* Fin ajustar configuracion */

    await page.waitForFunction('document.querySelector(\'#invite\').value !== ""');
    const link = await page.$eval('#invite', (el) => el.value);
    console.log(link);
    if (message) {
      await sendMessage(`Tu partida ya está lista! Entra 👉🏻 ${link}`, message);
    }
    try {
      // TODO Mandar mensaje de 15s. timeout
      // TODO: Que el bot pregunte el número de jugadores y mientras no haya ese numero (+1 por el bot) éste no empiece la partida y se desconecte
      sendMessage(`Tienes ${botWaitingTimeout / 1000} segundos para entrar ⏱`);
      await page.waitFor(botWaitingTimeout);
      await page.waitForFunction('[...document.querySelectorAll(\'div#containerLobbyPlayers>div.lobbyPlayer\')].length > 1');
      // Empezar partida
      await page.$eval('#buttonLobbyPlay', (el) => el.click());
      scrapResponse = {
        success: true,
        error: null,
      };
    } catch (error) {
      console.error(error);
      scrapResponse = {
        success: false,
        error,
      };
    // } finally {
      // TODO Mandar mensaje de reintentar
      // await page.waitForFunction('[...document.querySelectorAll(\'div#containerLobbyPlayers>div.lobbyPlayer\')].length > 1');
      // await browser.close();
    // }
    }
  } catch (error) {
    console.error(error);
    if (page) {
      await page.close();
    }
    scrapResponse = {
      success: true,
      error: null,
    };
  }
  return scrapResponse;
};

// TODO Descomentar
scrap();

module.exports = {
  scrap,
};
