const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { User,Favorite } = require('../models')

const userController = {
  signUp: (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body
    if (password !== confirmPassword) throw new Error('Passwords do not match')
    User.findOne({ where: { email } })
      .then(user => {
        if (user) throw new Error('The email is already signed up')
        return bcrypt.hash(password, 10)
      })
      .then(hash => {
        return User.create({
          name,
          email,
          password: hash
        })
      })
      .then(createdUser => res.json({ status: 'success', createdUser }))
      .catch(err => next(err))
  },
  signIn: (req, res, next) => {
    try {
      const userData=req.user.toJSON()
      delete userData.password
      const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '30d' })
      res.json({
        status: 'success',
        data: {
          user: userData,
          token
        }
      })
    }
    catch (err) {
      next(err)
    }
  },
  checkUser:(req, res, next)=>{
    const user=req.user
    User.findByPk(user.id)
    .then(user=>{
      if(!user) throw new Error('The User is not Exist!')
      res.json({status:'success',user})
    })
    .catch(err=>next(err))
  },
  addFavorite:(req,res,next)=>{
    const {collectionId}=req.body
    const user=req.user
    Favorite.findOne({
      where:{
        userId:user.id,
        collectionId
      },
      raw:true,
      nest:true
    })
    .then(favorite=>{
      if(!collectionId) throw new Error('The collection is not existed')
      if(favorite) throw new Error('You have favorited this collection')
      return Favorite.create({
        userId:user.id,
        collectionId
      })
    })
    .then(favorite=>res.json({status:'success',favorite}))
    .catch(err=>next(err))
  },
  deleteFavorite:(req,res,next)=>{
    const {collectionId}=req.params
    const user=req.user
    Favorite.findOne({
      where:{
        userId:user.id,
        collectionId
      }
    })
    .then(favorite=>{
      if(!favorite) throw new Error("You haven't favorited this collection")
      return favorite.destroy()
    })
    .then(deletedFavorite=>res.json({status:'success',favorite:deletedFavorite}))
    .catch(err=>next(err))
  },
  getFavorites:(req, res, next)=>{
    const user=req.user
    const FavoritedCollection=user.FavoritedCollection
    return res.json({status:'success',FavoritedCollection})
  }
}

module.exports = userController