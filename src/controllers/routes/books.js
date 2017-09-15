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

router.get('/edit/:id', isLoggedIn, (request, response, next) => {
  const id = request.params.id
  const username = request.user.username
  book.getBook( id )
    .then( book => {
      book
      response.render( 'edit', { book, username } )
    })
})

router.put('/edit/:id', isLoggedIn, (request, response, next) => {
  const id = request.params.id
  const book = request.body
  const username = request.user.username
  book.updateBook( id, book )
    .then( book => {
      book
      response.redirect( '/' )
    })
})

router.delete('/delete/:id', isLoggedIn, (request, response, next) => {
  const id = request.params.id
  const username = request.user.username
  book.deleteBook( id )
    .then( book => {
      book
      response.redirect( '/books')
    })
})


module.exports = router;
