const assert = require('assert');
const { Given, When, Then, AfterAll, BeforeAll } = require('@cucumber/cucumber');
const { Builder, By } = require('selenium-webdriver');

let driver;

BeforeAll(async function () {
    driver = await new Builder().forBrowser('chrome').build();
});

Then('the page should return with {string}', async (s) => {
    let message = await driver.findElement(By.id('message'));
    let value = await message.getText();
    assert.equal(s, value);
})

When('I enter {string} in the Text input', async (s) => {
    let title = await driver.getTitle();
    assert.equal("Web form", title);

    await driver.manage().setTimeouts({ implicit: 500 });

    let textBox = await driver.findElement(By.name('my-text'));
    let submitButton = await driver.findElement(By.css('button'));

    await textBox.sendKeys(s);
    await submitButton.click();
})

Given('I am on the Selenium web page', async () => {
    await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
})

AfterAll(async function () {
    await driver.quit();
});