const databaseBooks = require( '../../models/books.js' );
const {renderError} = require('../utilities/utilities.js')
const router = require('express').Router()
const isLoggedIn = require( '../routeMiddlewares/routeMiddlewares.js' );


router.get('/', isLoggedIn, (request, response, next) => {
  response.render('books')
})


module.exports = router;
