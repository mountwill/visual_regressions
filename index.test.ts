import puppeteer from "puppeteer";
import { toMatchImageSnapshot } from "jest-image-snapshot";

expect.extend({ toMatchImageSnapshot });

it("renders correctly", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.change.org");
  const image = await page.screenshot();

  expect(image).toMatchImageSnapshot();
  await browser.close();
});
