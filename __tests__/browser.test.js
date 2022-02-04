const puppeteer = require("puppeteer");

describe("My first test on puppeteer", () => {
  it("Should open and close the browser", async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("http://www.google.com");
    await page.waitForTimeout(5000);
    await browser.close();
  });
});
