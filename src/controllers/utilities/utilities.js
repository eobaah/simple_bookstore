const renderError = ( error , response ) {
  response.send(`ERROR: ${error.message}\n\n${error.stack}`)
}

const renderUnauthorized = ( response ) {
  respose.send('You do not have access to this page.' );
}

module.exports = {renderError, renderUnauthorized}
