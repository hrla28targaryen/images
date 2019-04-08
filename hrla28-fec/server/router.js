const router = require('express').Router()
const controller = require('./controller.js')

router
    .route('/images')
    .get(controller.get)


module.exports = router
