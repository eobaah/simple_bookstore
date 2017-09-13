const databaseBooks = require( '../../models/books.js' );
const {renderError} = require('../utilities/utilities.js')
const router = require('express').Router()


router.get('/', (request, response) => {
  response.send('This is the page you want')
})


module.exports = router;
