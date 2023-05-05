const express = require('express')
const router = express.Router()
const user = require('./modules/user')
const admin = require('./modules/admin')
const { apiErrorHandler } = require('../middleware/error-handler')

router.use('/users', user)
router.use('/admin', admin)
router.use('/', apiErrorHandler)

module.exports = router