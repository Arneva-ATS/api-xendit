import Xendit from 'xendit-node';
import { xenditConfig } from '../config/xenditConfig';
import logger from '../utils/logger';

const x = new Xendit(xenditConfig);
const { Invoice } = x;

export const createInvoice = async (data: any) => {
    try {
        logger.info('Creating invoice with data: ' + JSON.stringify(data));
        const invoice = await Invoice.createInvoice(data);
        logger.info('Invoice created successfully: ' + JSON.stringify(invoice));
        return invoice;
    } catch (error: any) {
        logger.error('Failed to create invoice: ' + error.message);
        throw new Error(`Failed to create invoice: ${error.message}`);
    }
};
