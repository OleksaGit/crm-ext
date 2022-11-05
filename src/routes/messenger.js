const { Router } = require('express');
const router = Router();
const auth = require('../middleware/auth')

router.get('/', auth, (req, res) => {
      res.render('messenger', {
          title: 'Месенджери',
          isMessenger: true,
        });
    });

module.exports = router;