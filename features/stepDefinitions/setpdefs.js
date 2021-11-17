const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium } = require("playwright");


async function serachGG(string) {
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
  const page = await browser.newPage();
  await page.goto("https://www.google.com");
  await page.click("input");
  await page.keyboard.type(string);
  await page.keyboard.press("Enter");
  // await page.click("#rso > div:nth-child(1) > div > div:nth-child(1) > div > div > div > div.yuRUbf > a")
  await browser.close();
  return 'done';
}

Given("search {string}", function (searchText) {
  this.search = searchText;
});

When("I want search", function () {
  this.actualAnswer = serachGG(this.search);
});

Then("I search by gg", function () {
});

