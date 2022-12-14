import { Router } from 'express'
import auth from '../middleware/auth'
import GetDatabaseService from '../services/getData'
import { mockData } from "./mockData";

const router = Router();

export default router.get('/', auth, async (req, res) => {
  let data
  try {
    data = await GetDatabaseService.awaitingOrder('order')
    // const data = {}
    
  } catch (e) {
    console.log(e)
    data = mockData
  }

  res.render('index', { data });
});


