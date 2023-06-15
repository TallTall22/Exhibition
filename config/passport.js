const passport = require('passport')
const LocalStrategy=require('passport-local').Strategy
const passportJWT = require('passport-jwt')
const bcrypt=require('bcryptjs')
const { User } = require('../models')


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
    User.findByPk(jwtPayload.userId, (err, user) => {
    if (err) {
      return cb(err, false);
    }
    if (user) {
      // 如果找到使用者，將使用者物件傳遞給下一個 middleware
      return cb(null, user);
    } else {
      // 如果找不到使用者，回傳 false
      return cb(null, false);
    }
  })
})

passport.use(jwtStrategy)
}