const express = require('express')
const router = express.Router()
const userController = require('../../controller/user-controller')
const passport=require('passport')

router.get('/signup')
router.post('/signup', userController.signUp)
router.get('/signin')
router.post('/signin',passport.authenticate('local',{session:false}), userController.signIn)

module.exports = router