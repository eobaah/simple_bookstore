require( 'dotenv' ).config();
const PORT = process.env.PORT_NUMBER;
const express = require( 'express' );
const app = express();
const session = require( 'express-session' );
const bodyParser = require( 'body-parser' );
const morgan = require( 'morgan' );

const databaseBooks = require( './src/models/books.js' );
const databaseMembers = require( './src/models/members.js' );

const booksRoutes = require( './src/controllers/routes/books.js' );
const membersRoutes = require( './src/controllers/routes/members.js' );
                        
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

app.use( bodyParser.urlencoded( { extended: true } ) )
app.use( bodyParser.json() )

app.use('/', membersRoutes)
app.use('/signup', membersRoutes)
app.use('/login', membersRoutes)
app.use('/books', booksRoutes)


app.listen(PORT, function () {
  console.log(`You're app is running on port ${PORT}!`)
})
