import express, { NextFunction, Request, Response } from 'express';
import PlayerController from '../controllers/player.controller';
import bodyParser from 'body-parser';

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json()

router.post('/player-stats', jsonParser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data: any = await new PlayerController().getPlayerLike(req.body);
    res.json(data);
  } catch (e) {
    next(e);
  }
});


export default router