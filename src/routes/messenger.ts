import { Router } from 'express';
const router = Router();
import auth from '../middleware/auth'

router.get('/', auth, (req, res) => {
      res.render('messenger', {
          title: 'Месенджери',
          isMessenger: true,
        });
    });

export default router