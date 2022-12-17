import {Router} from 'express';
const router = Router();
import auth from '../middleware/auth';

router.get('/', auth, (req, res) => {
      res.render('report', {
          title: 'Звіти',
          isReport: true,
        });
    });

export default router