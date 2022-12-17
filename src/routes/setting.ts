import {Router} from 'express';
import Setting from '../models/setting';
const router = Router();
import auth from '../middleware/auth';

router.get('/', auth, (req, res) => {
      res.render('setting', {
          title: 'Налаштування',
          isSetting: true,
        });
    });

router.post('/',(req, res) => {
 const {ipServer, baseNameAsc, tokenTg, tokenViber} = req.body
  const setting = new Setting(ipServer, baseNameAsc, tokenTg, tokenViber)

  setting.save()

})

export default router