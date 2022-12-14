import { User } from "../models/mongo";
import bcrypt from 'bcryptjs';

 async function firstUser (password, name, surname, email, loginAsc, passwordAsc, isAdmin) {
   const hashPassword = await bcrypt.hash(password, 10)
   const firstUser = new User({
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

firstUser('Admin', 'Alex', 'Boost', 'portaltech@ukr.net', 'Admin', 'Admin', true).then(() => console.log('Write user OK'))