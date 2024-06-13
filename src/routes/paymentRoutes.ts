import { Router } from 'express';
import { createPayment } from '../controllers/paymentController';
import { validateXenditRequest } from '../middlewares/xenditMiddleware';
const router:Router = Router()

router.post('/create-payment', validateXenditRequest, createPayment);

export default router;
