import { Request, Response } from 'express';
import { createInvoice } from '../services/xenditService';
import logger from '../utils/logger';

export const createPayment = async (req: Request, res: Response) => {
    try {
        const {
            amount,
            description,
            customer,
            // customer_notification_preference,
            items,
        } = req.body;
        console.log(req.body);
        
        if (!amount || !items || !description || !customer) {
            logger.error('Missing required fields');
            return res.status(400).json({ error: 'amount, items, description, customer are required fields' });
        }

        const invoiceData = {
            externalId: `invoice-${Date.now()}`,
            // amount: parseInt(amount),
            amount: 1,
            description: description,
            invoiceDuration: 3600,
            customer: customer,
            // customerNotificationPreference: customer_notification_preference,
            successRedirectUrl: "https://rkiapp.arnevats.com/admin",
            failureRedirectUrl: "https://rkiapp.arnevats.com/admin",
            currency: "IDR",
            items: items,
        };

        logger.info('Invoice data: ' + JSON.stringify(invoiceData));

        const invoice = await createInvoice(invoiceData);
        res.status(201).json(invoice);
    } catch (error:any) {
        logger.error('Error creating payment: ' + error.message);
        res.status(500).json({ error: error.message });
    }
};

export const handleXenditCallback = async (req: Request, res: Response) => {
    try {
        const callbackData = req.body;
        logger.info('Received callback from Xendit: ' + JSON.stringify(callbackData));

        // Process the callback data as needed
        // Example: Update payment status in your database
        // const { id, status, amount, external_id } = callbackData;

        // Your logic to handle the callback

        res.status(200).json({ message: 'Callback received successfully' });
    } catch (error:any) {
        logger.error('Error handling Xendit callback: ' + error.message);
        res.status(500).json({ error: error.message });
    }
};