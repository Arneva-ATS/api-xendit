import { Router } from "express";
import paymentRoutes from "./paymentRoutes";
const rootRouter:Router = Router();

rootRouter.use('/xendit', paymentRoutes)

export default rootRouter;