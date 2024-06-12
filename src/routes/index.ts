import { Router } from "express";
import authRoutes from "./auth";
import xendotRoutes from "./xendit";

const rootRouter:Router = Router();

rootRouter.use('/auth', authRoutes)
rootRouter.use(xendotRoutes)

export default rootRouter;