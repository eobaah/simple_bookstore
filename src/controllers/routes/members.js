const {
  hashPassword,
  comparePassword,
  saltRounds
} = require( '../../authentication/hashpassword.js' );
const isLoggedIn = require( './routesMiddleware.js' );
const {createMember} = require( '../../models/members.js' );
const {renderError} = require('../utilities/utilities.js');
const router = require('express').Router();

router.get('/', (request, response, next) => {
  response.render('splash');
});

router.get('/signup', (request, response, next) => {
  response.render('signup');
});

router.post('/signup', (request, response, next) => {

  let {
    first_name,
    last_name,
    email,
    username,
    password,
    confirm_password } = request.body;

  if ( password !== confirm_password) {
    return response.render( 'signup', {
      message: 'Your password does not match!'
    } )
  }

  hashPassword( password, saltRounds )
    .then( (hashedPassword) => createMember(
      first_name, last_name, email, username, hashedPassword)
    )
    .then( ( members ) => {
      let member = members[0]
      request.user = {
        id: member.id,
        first_name: member.first_name,
        last_name: member.last_name,
        email: member.email,
        username: member.username,
        password: member.password
      }
      request.session.user = request.user
      console.log( "request.session:", request )
      response.redirect('/books');
    }).catch( error => {
      console.log( "Damn it failed: ", error );
      response.render( 'signup', {
        message: 'Your authentication failed buddy!'
      })
    })

});

router.get('/login', ( request, response, next ) => {
  response.render('login');
});




module.exports = router;
