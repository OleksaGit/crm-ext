const { Router } = require('express')
const router = Router()
const { User } = require('../models/mongo');
const bcrypt = require('bcryptjs')

router.get('/login', async (req, res) => {
  res.render('auth/login.hbs', {
    title: 'Авторизація',
    isLogin: true,
    error: req.flash('loginError')
  })
})

router.get('/logout', async (req, res) => {
  req.session.destroy(() => {
    res.redirect('/auth/login')
  })
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email: email });

    // const user = coll?.toObject()

    if (user) {
      const verify = await bcrypt.compare(password, user.password)
      if (verify) {
        req.session.user = user
        req.session.isAuthenticated = true
        user.isAdmin ? req.session.isAdmin = true : req.session.isAdmin = false //todo add other user rights
        res.redirect('/')
        module.exports = user
      } else {
        req.flash('loginError', 'Не вірні данні або користувач не зареєстрований')
        res.redirect('/auth/login')
      }
    } else {
      req.flash('loginError', 'Не вірні данні або користувач не зареєстрований')
      res.redirect('/auth/login')
    }

  } catch (e) {
    console.log(e)
  }

})

//export const authRoutes = router
 module.exports = router