const term = require('terminal-kit').terminal;

/**
 * Help instructions
 */
module.exports = () => {
    term.red('Command not found.\n');
    term('Run ').green('node index.js help');
    term(' to see a list of all the possible commands.\n');
};
