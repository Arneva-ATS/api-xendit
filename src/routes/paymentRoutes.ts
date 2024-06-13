import { Router } from 'express';
import { createPayment, handleXenditCallback } from '../controllers/paymentController';
import { validateXenditRequest } from '../middlewares/xenditMiddleware';
const router:Router = Router()

router.post('/create-payment', validateXenditRequest, createPayment);
router.post('/callback-payment', validateXenditRequest, handleXenditCallback);
export default router;
