const term = require('terminal-kit').terminal;
const printHelp = require('./scripts/printHelp');
const takeScreenshot = require('./scripts/takeScreenshot');
const errorMessage = require('./scripts/errorMessage');

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
        errorMessage();
        break;
}
