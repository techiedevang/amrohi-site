const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://amrohi-builder.preview.emergentagent.com/', { waitUntil: 'networkidle2' });
  
  // Extract all img src and background images
  await page.waitForTimeout(5000); // Wait 5 seconds
  
  const html = await page.evaluate(() => document.body.innerHTML);
  
  const fs = require('fs');
  fs.writeFileSync('page.html', html);
  
  console.log('Saved page.html');
  await browser.close();
})();
