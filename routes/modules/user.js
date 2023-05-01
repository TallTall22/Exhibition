const express = require('express')
const router = express.Router()
const userController = require('../../controller/user-controller')
const { apiErrorHandler } = require('../../midddleware/error-handler')

router.get('/signup')
router.post('/signup', userController.signUp)

router.use('/', apiErrorHandler)
module.exports = router