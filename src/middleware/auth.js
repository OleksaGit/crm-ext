module.exports = function (req, res, next) {
  if (!req.session.isAuthenticated) {
    return res.redirect('/auth/login')
  }
  next()
}

// export const auth = function (req, res, next) {
//   if (!req.session.isAuthenticated) {
//     return res.redirect('/auth/login')
//   }
//   next()
// }