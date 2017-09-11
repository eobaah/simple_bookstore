require( 'dotenv' ).config()
const express = require( 'express' )
const app = express()
const bodyParser = require( 'body-parser' )
const database = require( './src/models/database.js' )
const PORT = process.env.PORT_NUMBER

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(PORT, function () {
  console.log(`You're app is running on port ${PORT}!`)
})
