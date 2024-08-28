import { Router } from 'express';
import controllers from '../controllers';

const router = Router();

router.get(`/cards`, controllers.getCards);
router.get(`/cards/:title`, controllers.getCardsWithTitle);
router.post(`/cards`, controllers.postCards);

export default router;
