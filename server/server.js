const express = require('express')
const path = require('path')

const scheduleRoutes = require('./routes/schedule')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/schedule', scheduleRoutes)

module.exports = server
