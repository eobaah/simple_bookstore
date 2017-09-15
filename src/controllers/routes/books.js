const databaseBooks = require( '../../models/books.js' );
const {renderError} = require('../utilities/utilities.js')
const router = require('express').Router()
const isLoggedIn = require( '../routeMiddlewares/routeMiddlewares.js' );
const book = require( '../../models/books.js' );

router.get('/', isLoggedIn, (request, response, next) => {
  const username = request.user.username
  book.getAllBooks()
    .then( books => {
      books
      response.render( 'books', { books, username } )
    })
})


module.exports = router;
