const databaseBooks = require( '../../models/books.js' );
const {renderError} = require('../utilities/utilities.js')
const router = require('express').Router()


router.get('/', (req, res) => {
  res.render('login')
})


module.exports = router;
