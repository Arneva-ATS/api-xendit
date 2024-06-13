import { XenditOpts } from 'xendit-node';
import 'dotenv/config';
export const xenditConfig: XenditOpts = {
    secretKey: process.env.XENDIT_SECRET_KEY!,
};
