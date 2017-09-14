const isLoggedIn = ( request, response, next ) => {
  return request.user ? next() : response.redirect('/login')
}

module.exports =  isLoggedIn
