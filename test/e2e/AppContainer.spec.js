import puppeteer from "puppeteer";

describe("Todo app", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
      args: ["--window-size=1920,1080"]
    });

    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should be titled "todo-list"', async () => {
    await expect(page.title()).resolves.toMatch("todo-list");
  }, 20000);

  test("should type in todo box", async () => {
    await page.tap('[data-test="todo-input"]');
    await page.type('[data-test="todo-input"]', "breakfast");

    const inputBoxText = await page.$eval(
      '[data-test="todo-input"]',
      elem => elem.value
    );

    expect(inputBoxText).toBe("breakfast");
  }, 20000);

  test("shoule add a new todo", async () => {
    await page.click('[data-test="todo-submit-button"]');

    const listItemCount = await page.$$eval(
      '[data-test="todo-list-item"]',
      elems => elems.length
    );

    expect(listItemCount).toBe(1);
  });
});
