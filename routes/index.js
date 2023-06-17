const express = require('express')
const router = express.Router()
const user = require('./modules/user')
const admin = require('./modules/admin')
const exhibition=require('./modules/exhibition')
const video=require('./modules/video')
const { apiErrorHandler } = require('../middleware/error-handler')

router.use('/users', user)
router.use('/admin', admin)
router.use('/exhibitions',exhibition)
router.use('/videos',video)
router.use('/', apiErrorHandler)

module.exports = router