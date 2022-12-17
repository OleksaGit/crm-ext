import { Router } from 'express';
import auth from '../middleware/auth'
import { User } from '../models/mongo';
import bcrypt from 'bcryptjs'

const router = Router();
router.get('/', auth, (req, res) => {
      res.render('user', {
          title: 'Користувач',
          isUser: true,
          //TODO error after rename extension file;
          // error: req.flash('registerError')
        });
    });

router.post('/', auth, async (req, res) => {
  try {
    const {name, password, email, loginAsc, passwordAsc, isAdmin, isManager, isEmployee } = req.body

    const candidate = await User.findOne({ email: email });

    if (candidate) {
      //TODO error after rename extension file
      //req.flash('registerError', 'Такий користувач вже існує')
      res.redirect('/user') //todo show message user find in system
    } else {
      const hashPassword = await bcrypt.hash(password, 10)
      const user = await User.create({
        name: name,
        password: hashPassword,
        email: email,
        loginAsc: loginAsc,
        passwordAsc: passwordAsc,
        isAdmin: (isAdmin === 'on'),
        isManager: (isManager === 'on'),
        isEmployee: (isEmployee === 'on'),
      })
     await user.save
    }

    res.redirect('/')

  } catch (e) {
    console.log(e)
  }
})

export default router