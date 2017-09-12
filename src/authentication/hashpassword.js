const bcrypt = require('bcrypt')
const saltRounds = process.env.SALT

const hashPassword = (password) => {
  return bcrypt.hash(password, saltRounds)
}

const comparePassword = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword)
}

module.exports = {
  hashPassword,
  comparePassword
}
