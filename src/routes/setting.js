const { Router } = require('express');
const Setting = require('../models/setting')
const router = Router();
const auth = require('../middleware/auth')

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

module.exports = router;