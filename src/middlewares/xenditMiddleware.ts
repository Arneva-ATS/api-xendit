import { Request, Response, NextFunction } from 'express';

export const validateXenditRequest = (req: Request, res: Response, next: NextFunction) => {
    // Middleware logic to validate Xendit request
    next();
};
