import { Router } from "express";
import { xenditCallback } from "../controllers/xendit";

const xendit:Router = Router()

xendit.post('/xendit', xenditCallback);

export default xendit;

