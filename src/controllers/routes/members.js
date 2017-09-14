const authentication = require( '../../authentication/hashpassword.js' );
const isLoggedIn = require( '../routeMiddlewares/routeMiddlewares.js' );
const member = require( '../../models/members.js' );
const {renderError} = require('../utilities/utilities.js');
const router = require('express').Router();


router.get('/', (request, response, next) => {
  response.render('splash');
});

router.get('/signup', (request, response, next) => {
  response.render('signup');
});

router.post('/signup', (request, response, next) => {

  const {
    first_name,
    last_name,
    email,
    username,
    password,
    confirm_password } = request.body;

  if ( password !== confirm_password ) {
    console.log("your password does not match")
    return response.render( 'signup', {
      message: 'Your password does not match!'
    } )
  }

  authentication.hashPassword( password )
    .then( hashedPassword => member.createMember(
      first_name, last_name, email, username, hashedPassword
    ))
    .then( members => {
      let member = members[0]
      request.user = {
        id: member.id,
        first_name: member.first_name,
        last_name: member.last_name,
        email: member.email,
        username: member.username
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

router.get('/login', (request, response, next) => {
  response.render('login');
});

router.post('/login', (request, response, next) => {
  console.log(request.body)
  const { email, password } = request.body;
  member.findByEmail( email )
    .then( member => {
      if ( member.email.length < 1 ) {
        response.render( 'signup', {
          message: 'member does not exists!'
        })
      } else {
        hashedPassword = member.password
        authentication.comparePassword(password, hashedPassword)
          .then( match => {
            if( !match ) {
              return response.render( 'login', {
                message: 'Oops! please check your credentials and login again!'
              })
            } else {
              request.user = {
                id: member.id,
                first_name: member.first_name,
                last_name: member.last_name,
                email: member.email,
                username: member.username,
                password: member.password
              }
              request.session.user = request.user
              return response.redirect('/books');
            }
          })
      }
    })
      .catch( error => {
        console.log( "Damn it failed: ", error );
        response.render( 'login', {
          message: 'Check your credentials!'
        })
      });
})

router.get('/logout', (request, response, next) => {
  console.log("fetch is working")
  console.log(request.session)
  console.log(request.user)
  request.session = null
  response.redirect('/login');
});


module.exports = router;
