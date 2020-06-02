var express = require('express')
const chalk = require('chalk')
const config = require('./config')
const db = require('./db')
const router = require('./network/routes')
var app = express();

db(config.dbUrl)

app.use(express.json())

app.get('/', function (req, res) {
  res.send('¡Hola!');
})

router(app)

app.listen(config.port, function () {
  console.log(`${chalk.blue('[server]')} Servidor esta funcionando http://localhost:${config.port}/`);
})
