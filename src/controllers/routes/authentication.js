const databaseBooks = require( '../../models/books.js' );
const {renderError} = require('../utilities/utilities.js')
const router = require('express').Router()


// router.use( (request, response, next) => {
// });

router.get('/', (request, response, next) => {
  response.render('login');
});




module.exports = router;
