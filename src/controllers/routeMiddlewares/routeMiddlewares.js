const isLoggedIn = ( request, response, next ) => {
  if( request.session.user ) {
    request.user = request.session.user
    next()
  } else {
    response.redirect('/login')
  }
}

module.exports =  isLoggedIn
