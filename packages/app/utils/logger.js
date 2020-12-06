const chalk = require('chalk');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const { verbose } = yargs(hideBin(process.argv)).option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
}).argv;

const error = (...data) => {
    console.log(chalk.bold.red('ERROR'), ...data);
};

const warning = (...data) => {
    console.log(chalk.yellow('WARN'), ...data);
};

const important = (...data) => {
    console.log(chalk.cyan('INFO'), ...data);
};

const info = (...data) => {
    console.log(chalk.green('INFO'), ...data);
};

const trace = (...data) => {
    if (verbose) {
        console.log(chalk.gray('TRACE'), ...data);
    }
};

const arg = (message, value) => `${chalk.green(message)}=${value}`;

module.exports = {
    error,
    warning,
    important,
    info,
    trace,
    arg
};
