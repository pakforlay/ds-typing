const chalk = require('chalk');
const sig = () => console.log(chalk.hex('#3CD10C')(`
╭━━━╮╱╱╱╱╱╱╭━━━╮
┃╭━╮┃╱╱╱╱╱╱╰╮╭╮┃
┃┃╱╰╋╮╱╭┳━━╮┃┃┃┣━━┳━━┳━━┳╮╱╭╮
┃┃╭━┫┃╱┃┃╭╮┃┃┃┃┃╭╮┃╭╮┃╭╮┃┃╱┃┃
┃╰┻━┃╰━╯┃╰╯┣╯╰╯┃╰╯┃╰╯┃╰╯┃╰━╯┃
╰━━━┻━╮╭┻━╮┣━━━┻━━┻━╮┣━╮┣━╮╭╯
╱╱╱╱╭━╯┃╭━╯┃╱╱╱╱╱╱╭━╯┣━╯┣━╯┃
╱╱╱╱╰━━╯╰━━╯╱╱╱╱╱╱╰━━┻━━┻━━╯
    `))

module.exports = {sig}
