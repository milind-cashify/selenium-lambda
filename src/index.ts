import {Builder, By} from 'selenium-webdriver';

const startTest = async () => {
    const driver = new Builder().forBrowser('chrome').build();
    await driver.get('https://www.cashify.in');
    const initTitle = await driver.getTitle();
    console.log('Initial Title is:', initTitle);

    const sellLink = await driver.findElement(By.linkText('Sell'));
    await sellLink.click();

    const updatedTitle = await driver.getTitle();
    console.log('Title is:', updatedTitle);

    await driver.quit();
}

startTest();
