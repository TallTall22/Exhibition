const bcrypt = require('bcryptjs')
const { User } = require('../models')

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
  }
}

module.exports = userController