const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://skribbl.io/');
    await page.$eval('#buttonLoginCreatePrivate', (el) => el.click());
    await page.waitForFunction('document.querySelector(\'#invite\').value !== ""');
    const link = await page.$eval('#invite', (el) => el.value);
    // await browser.close();
    console.log(link);
  } catch (e) {
    console.error(e);
  }
})();
