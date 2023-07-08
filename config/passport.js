const passport = require('passport')
const LocalStrategy=require('passport-local').Strategy
const passportJWT = require('passport-jwt')
const bcrypt=require('bcryptjs')
const { User,Collection } = require('../models')


module.exports=app=>{
  app.use(passport.initialize())
  app.use(passport.session())

  passport.use(new LocalStrategy({
    usernameField:'email'
  },
  (email,password,cb)=>{
    User.findOne({where:{email}})
    .then(user=>{
      if(!user){
          return cb(null, false,{message:'Email or password is incorrect'})
      }
      return bcrypt.compare(password,user.password).then(isMatch=>{
        if(!isMatch){
          return cb(null, false,{message:'Email or password is incorrect'})
        } 
        return cb(null,user)
      })
    })
  }))

const JWTStrategy = passportJWT.Strategy
const ExtractJwt = passportJWT.ExtractJwt
const jwtOption = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}

const jwtStrategy=new JWTStrategy(jwtOption,(jwtPayload,cb)=>{
    User.findByPk(jwtPayload.id,{
      include:{model:Collection,as:'FavoritedCollection'}
    })
    .then(user=>cb(null,user))
    .catch(err=>cb(err))
})

passport.use(jwtStrategy)
}