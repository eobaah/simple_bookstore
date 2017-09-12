const databaseBooks = require( '../../models/books.js' );
const {renderError} = require('../utilities/utilities.js')
const router = require('express').Router()

router.get('/', (request, response, next) => {
  response.render('splash');
});

router.get('/signup', (request, response, next) => {
  response.render('signup');
});

router.post('/signup', (request, response, next) => {
  console.log(request.body);
  response.redirect('/books');
});

router.get('/login', (request, response, next) => {
  response.render('login');
});




module.exports = router;
