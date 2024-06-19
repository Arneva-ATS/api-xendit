import { XenditOpts } from 'xendit-node';
import 'dotenv/config';

const { DEV_XENDIT_SECRET_KEY, PRODUCTION_XENDIT_SECRET_KEY, APP_ENV } = process.env;

const secretKey = APP_ENV === 'production' ? PRODUCTION_XENDIT_SECRET_KEY : DEV_XENDIT_SECRET_KEY;

export const xenditConfig: XenditOpts = {
    secretKey: secretKey!,
};
