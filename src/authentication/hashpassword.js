const bcrypt = require('bcrypt')
const saltRounds = 10

const hashPassword = (password, saltRounds) => {
  return bcrypt.hash(password, saltRounds)
}

const comparePassword = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword)
}

module.exports = {
  hashPassword,
  comparePassword,
  saltRounds
}
