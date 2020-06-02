require('dotenv').config()

const config = {
    dbUrl: process.env.DB_URL,
    dbName: process.env.DB_NAME,
    port: 3000
}

module.exports = config