const express = require('express')
const router = express.Router()
const user = require('./modules/user')
const admin = require('./modules/admin')
const exhibition=require('./modules/exhibition')
const collection=require('./modules/collection')
const video=require('./modules/video')
const ticket=require('./modules/ticket')
const {authenticated,authenticatedAdmin}=require('../middleware/auth')
const { apiErrorHandler } = require('../middleware/error-handler')

router.use('/users', user)
router.use('/admin',authenticated,authenticatedAdmin, admin)
router.use('/exhibitions',exhibition)
router.use('/collections',collection)
router.use('/videos',video)
router.use('/carts',cart)
router.use('/tickets',authenticated,ticket)
router.use('/', apiErrorHandler)

module.exports = router
