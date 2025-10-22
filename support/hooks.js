const { Before, After, AfterStep } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  
  const dir = path.join(process.cwd(), 'reports', 'screenshots');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

After(async function (scenario) {
 
  if (this.page) await this.page.close();
  if (this.context) await this.context.close();
  if (this.browser) await this.browser.close();
});

AfterStep(async function ({ result, pickle }) {
  if (result.status === 'FAILED' && this.page) {
    const name = `${Date.now()}.png`;
    const filePath = `reports/screenshots/${name}`;
    await this.page.screenshot({ path: filePath, fullPage: true });

    console.log(`Screenshot saved to: ${filePath}`);
  }
});
