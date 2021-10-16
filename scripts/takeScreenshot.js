const puppeteer = require('puppeteer');
const term = require('terminal-kit').terminal;

/**
 * Create a webpage screenshot
 */
async function takeScreenshot(url) {
    term.clear();
    term(`Generating screenshot for ${url}, wait please...\n`);

    try {
        // start browser, a new tab then go to url
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({
            width: 1920,
            height: 1080,
            deviceScaleFactor: 1,
        });
        await page.goto(url);

        // perform actions on the page
        const screenTitle = await page.title();
        await page.screenshot({
            path: `./screens/${screenTitle}.png`,
            fullPage: true,
        });

        // close browser
        await browser.close();

        // Console feedback
        term.green(
            'Screenshot created succesfully. You can find it on the screens folder\n'
        );
    } catch (err) {
        term.red(
            'Impossible complete the operation.\n' +
                err +
                '\nPress ctrl + c to exit\n'
        );
    }
}

module.exports = takeScreenshot;
