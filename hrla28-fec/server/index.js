const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./router.js')

const port = 1143
const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))

server.use('/', express.static(path.join(__dirname, '../client/dist')))
server.use('/api', router)

server.listen(port)