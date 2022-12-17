import { Router } from 'express'
import auth from '../middleware/auth'
import GetDatabaseService from '../services/getData'
import { mockData } from "./mockData";
import AscGetData from "../components/ASC/ascGetData";

const router = Router();

export default router.get('/', auth, async (req, res) => {
  let data
  try {
    data = await GetDatabaseService.awaitingOrder('order')
    // data = {}
    // data = AscGetData.awaitingOrder()
    
  } catch (e) {
    console.log(e)
    data = mockData
  }

  res.render('index', { data });
});


