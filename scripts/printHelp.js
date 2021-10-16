const term = require('terminal-kit').terminal;

/**
 * Help instructions
 */
module.exports = () => {
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
};
