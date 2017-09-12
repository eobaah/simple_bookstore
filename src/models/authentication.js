const db = require('./db')

const User = {
  // isActiveUser: ( activeuserid ) => {
  //   return db.one(`SELECT * FROM room_members WHERE activeuserid=$1`,[ activeuserid ])
  // },

  createMember : ( firstname,
  lastname,
  email,
  username,
  password ) => {
    return db.none(`INSERT INTO member
      ( firstname,
      lastname,
      email,
      username,
      password )
    VALUES
      ( $1, $2, $3, $4, $5 )`,[ firstname,
      lastname,
      email,
      username,
      password ])
  },

  find: ( email, password ) => {
    return db.oneOrNone( 'SELECT * FROM users WHERE email=$1', [ email])
      .then( user => comparePassword( password, user))
  },

  findById: id => db.one( 'SELECT * FROM users WHERE id=$1', [ id ] ),
  createOne: (
    firstname,
    lastname,
    email,
    username,
    password ) => {
    return createSalt( password )
      .then( hashPassword )
      .then ( hash => {
        return db.one(
          `INSERT INTO users(
            firstname,
            lastname,
            email,
            username,
            salt,
            password ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [
              firstname,
              lastname,
              email,
              username,
              hash[ 0 ],
              hash[ 1 ] ]
        )
      })
  }
}

module.exports = {
  create,
  findById,
  findAll,
  destroy,
  search
}
