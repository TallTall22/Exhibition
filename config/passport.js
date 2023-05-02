const passport = require('passport')
const passportJWT = require('passport-jwt')
const { User } = require('../models')

const JWTStrategy = passportJWT.Strategy
const ExtractJwt = passportJWT.ExtractJwt
const jwtOption = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}

passport.use(new JWTStrategy(jwtOption, (jwtpayload, cb) => {
  User.findByPk(jwtpayload.id)
    .then(user => cb(null, user))
    .catch(err => cb(err))
}))

module.exports = passport