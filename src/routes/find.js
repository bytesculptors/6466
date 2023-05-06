const express = require('express')
const router = express.Router()

const findController = require ('../app/controllers/FindController')

router.use('/', findController.index)

module.exports = router
