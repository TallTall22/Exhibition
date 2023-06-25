const express = require('express')
const router = express.Router()
const userController = require('../../controller/user-controller')
const {authenticated,authenticatedAdmin}=require('../../middleware/auth')
const passport=require('passport')

router.post('/signup', userController.signUp)
router.post('/signin',passport.authenticate('local',{session:false}), userController.signIn)
router.get('/check',authenticated,userController.checkUser)
module.exports = router