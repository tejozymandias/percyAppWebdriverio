var assert = require('assert');
const percyScreenshot = require('@percy/appium-app');

describe('Search Wikipedia Functionality', () => {
  it('can find search results', async () => {
    var searchSelector = await $(`~Search Wikipedia`);
    await searchSelector.waitForDisplayed({ timeout: 30000 });
    await searchSelector.click();

    var insertTextSelector = await $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")');
    await insertTextSelector.waitForDisplayed({ timeout: 30000 });

    await insertTextSelector.addValue("BrowserStack");
    await browser.pause(5000);

    var allProductsName = await $$(`android.widget.TextView`);
    assert(allProductsName.length > 0);
  });
});

describe('Appium webdriverio test example', function() {
  it('takes a screenshot', async () => {
    await percyScreenshot(driver,'Appium FirstScreenshot');
  });
});
