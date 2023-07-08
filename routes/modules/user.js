const express = require('express')
const router = express.Router()
const userController = require('../../controller/user-controller')
const {authenticated}=require('../../middleware/auth')
const passport=require('passport')

router.post('/signup', userController.signUp)
router.post('/signin',passport.authenticate('local',{session:false}), userController.signIn)
router.get('/check',authenticated,userController.checkUser)
router.delete('/favorites/:collectionId',authenticated,userController.deleteFavorite)
router.post('/favorites',authenticated,userController.addFavorite)
router.get('/favorites',authenticated,userController.getFavorites)
module.exports = router