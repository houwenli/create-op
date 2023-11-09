const chalk = require('chalk');

const log = (msg) => {
  console.log(msg)
}

const error = (msg) => {
  console.log(chalk.red(msg))
}

const warning = (msg) => {
  console.log(chalk.green(msg))
}

module.exports = {
  log,
  error,
  warning
}