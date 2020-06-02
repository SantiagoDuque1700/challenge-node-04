const db = require('mongoose');
const chalk = require('chalk')

db.Promise = global.Promise;

async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log(`${chalk.green('[db]')} Conectada con éxito`);
}

module.exports = connect;
