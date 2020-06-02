const express = require('express')
const user = require('../componets/user/network')
const note = require('../componets/note/network')

const routes = (server) => {
    server.use('/user', user)
    server.use('/note', note)
}

module.exports = routes