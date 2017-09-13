const db = require('./db')

const createMember = ( first_name, last_name, email, username, password ) => {
  return db.query(`INSERT INTO member
    ( first_name, last_name, email, username, password )
  VALUES
    ( $1, $2, $3, $4, $5 )
  RETURNING *`,
    [ first_name, last_name, email, username, password ] )
}

  // find: ( email, password ) => {
  //   return db.oneOrNone( 'SELECT * FROM member WHERE email=$1', [ email] )
  //     .then( member => comparePassword( password, member) )
  // },

  // findById: id => db.one( 'SELECT * FROM member WHERE id=$1', [ id ] ),
  // createOne: (
  //   firstname,
  //   lastname,
  //   email,
  //   username,
  //   password ) => {
  //   return createSalt( password )
  //     .then( hashPassword )
  //     .then ( hash => {
  //       return db.one(
  //         `INSERT INTO member(
  //           firstname,
  //           lastname,
  //           email,
  //           username,
  //           password ) VALUES ($1, $2, $3, $4, $5 ) RETURNING *`, [
  //             firstname,
  //             lastname,
  //             email,
  //             username,
  //             hash[ 0 ],
  //             hash[ 1 ] ]
  //       )
  //     })
  // }


module.exports = {createMember}
