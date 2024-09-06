import { Request, Response } from 'express';
import { createInvoice } from '../services/xenditService';
import logger from '../utils/logger';

export const createPayment = async (req: Request, res: Response) => {
	try {
		const {
			amount,
			id_pos,
			description,
			customer,
			fees,
			metadata,
			success_redirect_url,
			failure_redirect_url,
			items,
		} = req.body;
		// console.log(req.body);

		// Collect missing required fields
		const missingFields = [];
		if (!amount) missingFields.push('amount');
		if (!items) missingFields.push('items');
		if (!description) missingFields.push('description');
		if (!customer) missingFields.push('customer');
		if (!success_redirect_url) missingFields.push('success_redirect_url');
		if (!failure_redirect_url) missingFields.push('failure_redirect_url');

		// Check if there are any missing required fields
		if (missingFields.length > 0) {
			const errorMessage = `Missing required fields: ${missingFields.join(', ')}`;
			logger.error(errorMessage);
			return res.status(400).json({ error: errorMessage });
		}

		// Validate amount
		if (isNaN(amount) || amount <= 0) {
			logger.error('Invalid amount');
			return res.status(400).json({ error: 'Invalid amount' });
		}

		// Validate items as array
		if (!Array.isArray(items) || items.length === 0) {
			logger.error('Invalid items');
			return res.status(400).json({ error: 'Invalid items' });
		}
		console.log(id_pos);
		let externalId = `invoice-${Date.now()}`
		const invoiceData = {
			externalId: externalId,
			amount: parseInt(amount),
			fees: fees,
			description: description,
			invoiceDuration: 300,
			customer: customer,
			successRedirectUrl: success_redirect_url,
			failureRedirectUrl: failure_redirect_url,
			currency: "IDR",
			items: items,
			metadata: metadata,
		};
		await fetch('https://api-rki.rkicoop.co.id/api/xendit/create-payment', {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify({ externalId })
		})
		.then(response => response.json())
		.then(async data => {
			logger.info('Invoice data: ' + JSON.stringify(invoiceData));
			if (data.response_code == "00") {
				const invoice = await createInvoice(invoiceData);
				res.status(201).json(invoice);
			} else{
				res.status(400).json({ error: data.response_message });
			}
		})

	} catch (error: any) {
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
	} catch (error: any) {
		logger.error('Error handling Xendit callback: ' + error.message);
		res.status(500).json({ error: error.message });
	}
};
