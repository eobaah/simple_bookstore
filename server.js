require( 'dotenv' ).config();
const PORT = process.env.PORT_NUMBER;
const express = require( 'express' );
const app = express();
const session = require( 'express-session' );
const bodyParser = require( 'body-parser' );

const databaseBooks = require( './src/models/books.js' );
const databaseAuth = require( './src/models/authentication.js' );

const booksRoutes = require( './src/controllers/routes/books.js' );
const authenticationRoutes = require( './src/controllers/routes/authentication.js' );

app.use(session({
  key: process.env.KEY,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { expires: 60000 }
}));

app.set( 'view engine','pug' );
app.set( 'views',__dirname + '/src/views' );
app.use( express.static('public') )

app.use(bodyParser.urlencoded( { extended: true } ) )

app.use('/', authenticationRoutes)
// router.use('/signup', authenticationRoutes)
// router.use('/books', booksRoutes)


app.listen(PORT, function () {
  console.log(`You're app is running on port ${PORT}!`)
})
