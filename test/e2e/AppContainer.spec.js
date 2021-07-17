import puppeteer from "puppeteer";

describe("check google", () => {
  // beforeEach(async () => {
  //   await page.goto("https://google.com");
  // });

  test('should be titled "Google"', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
      args: ["--window-size=1920,1080"]
    });

    const page = await browser.newPage();
    await page.goto("https://google.com");

    await expect(page.title()).resolves.toMatch("Google");
  }, 40000);
});
