const puppeteer = require('puppeteer');
const { sendMessage } = require('../utils');

/**
 * Scrapping action
 * @param {import('discord.js').Message} message
 * @param {import('./../config').ScrapConfig} scrapConfig
 */
const scrap = async (message, scrapConfig) => {
  let page;
  try {
    const browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto('https://skribbl.io/');
    await page.$eval('#buttonLoginCreatePrivate', (el) => el.click());

    /* Inicio ajustar configuracion */

    // Rondas
    // document.querySelector("#lobbySetRounds").value='3';

    // Tiempo ronda
    // document.querySelector("#lobbySetDrawTime").value='80':

    // Idioma
    // document.querySelector("#lobbySetLanguage").value='English'

    /* Fin ajustar configuracion */

    await page.waitForFunction('document.querySelector(\'#invite\').value !== ""');
    const link = await page.$eval('#invite', (el) => el.value);
    console.log(link);
    await sendMessage(`Tu partida ya está lista! Entra 👉🏻 ${link}`, message);
    try {
      // TODO Mandar mensaje de 30s. timeout
      await page.waitForFunction('[...document.querySelectorAll(\'div#containerLobbyPlayers>div.lobbyPlayer\')].length > 1');
    } catch (e) {
      console.error(e);
    } finally {
      // TODO Mandar mensaje de reintentar
      await page.waitForFunction('[...document.querySelectorAll(\'div#containerLobbyPlayers>div.lobbyPlayer\')].length > 1');
      await browser.close();
    }
  } catch (e) {
    console.error(e);
    if (page) {
      await page.close();
    }
  }
};

module.exports = {
  scrap,
};
