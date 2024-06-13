import { Request, Response } from 'express';
import { createInvoice } from '../services/xenditService';
import logger from '../utils/logger';

export const createPayment = async (req: Request, res: Response) => {
    try {
        const { amount, payer_email, description, invoice_duration, currency } = req.body;

        if (!amount || !payer_email || !description) {
            logger.error('Missing required fields: amount, payer_email, or description');
            return res.status(400).json({ error: 'amount, payer_email, and description are required fields' });
        }

        const invoiceData = {
            externalId: `invoice-${Date.now()}`,
            amount: amount,
            payerEmail: payer_email,
            description: description,
            invoiceDuration: invoice_duration,
            currency: currency
        };

        logger.info('Invoice data: ' + JSON.stringify(invoiceData));

        const invoice = await createInvoice(invoiceData);
        res.status(201).json(invoice);
    } catch (error:any) {
        logger.error('Error creating payment: ' + error.message);
        res.status(500).json({ error: error.message });
    }
};