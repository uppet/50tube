
const chalk = require('chalk');
const log = console.log;

function intro() {
  log(chalk.blue('This is ') + chalk.red('50') + chalk.yellow('tube') + chalk.blue(' club'));
}


module.exports = intro

if (require.main === module) {
    intro();
}
