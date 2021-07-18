import {Builder, By} from 'selenium-webdriver';

const lambdatestConfig = {
    username: 'milind.s',
    accessKey: 'PgKDDj9tNbj6gpmCuiV7cxOiGjsIAPrSgPxYBFWl2dBTzhWjjB',
    hubLink: 'hub.lambdatest.com/wd/hub'
}

const getLambdaServerUrl = (): string => {
    return `https://${lambdatestConfig.username}:${lambdatestConfig.accessKey}@${lambdatestConfig.hubLink}`;
}

const capabilities = {
    platform: 'Windows 10',
    browserName: 'Chrome',
    version: '92.0',
    resolution: '1024x768',
    network: true,
    visual: true,
    console: true,
    video: true,
    name: 'Test 1', // name of the test
    build: 'NodeJS build' // name of the build
}

const startTest = async () => {
    // const driver = new Builder().forBrowser('chrome').build();
    const driver = new Builder().withCapabilities(capabilities).usingServer(getLambdaServerUrl()).build();
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
