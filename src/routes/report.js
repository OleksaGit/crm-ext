const { Router } = require('express');
const router = Router();
const auth = require('../middleware/auth')

router.get('/', auth, (req, res) => {
      res.render('report', {
          title: 'Звіти',
          isReport: true,
        });
    });

module.exports = router;