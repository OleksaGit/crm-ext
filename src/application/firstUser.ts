const model = require('../models/mongo');
import MySqlService from '../services/mysql.js'
const bcrypt = require('bcryptjs');

 async function firstUser (password, name, surname, email, loginAsc, passwordAsc, isAdmin) {
   const hashPassword = await bcrypt.hash(password, 10)
   const firstUser = new model.User({
    password: hashPassword,
    name: name,
    surname: surname,
    email: email,
    loginAsc: loginAsc,
    passwordAsc: passwordAsc,
    isAdmin: isAdmin,
  })
  await firstUser.save()
}

function testF() {
  const some: MySqlService = new MySqlService()
}

firstUser('Admin', 'Alex', 'Boost', 'portaltech@ukr.net', 'Admin', 'Admin', true).then(() => console.log('Write user OK'))