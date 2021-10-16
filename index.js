const puppeteer = require('puppeteer');
const term = require('terminal-kit').terminal;

// Command args, skip 0 and 1 (node path and file path)
const argv = process.argv.slice(2);

switch (argv[0]) {
    case undefined:
    case 'help':
        printHelp();
        break;

    case 'screenshot':
        takeScreenshot(argv[1]);
        break;

    default:
        term.red('Command not found.\n');
        term('Run ').green('node index.js help');
        term(' to see a list of all the possible commands.\n');
        break;
}

/**
 * Help instructions
 */
function printHelp() {
    term.green(
        'Welcome to scraper, here follows a list of all the possible commands:\n\n'
    );

    // Help
    term.yellow('Show all possible commands: ');
    term('node index.js help\n');

    // Screenshot
    term.yellow('Webpage Screenshot: ');
    term('node index.js');
    term.cyan(' screenshot ');
    term.magenta('https://yoursite.com\n');
}

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
