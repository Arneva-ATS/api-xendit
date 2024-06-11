import { Xendit, Balance as BalanceClient } from 'xendit-node';
import { SECRET_API_KEY } from '../secret';

const xenditClient = new Xendit({
  secretKey: SECRET_API_KEY,
})

const { Balance } = xenditClient

const xenditBalanceClient = new BalanceClient({secretKey: SECRET_API_KEY})

const BalanceWallet = await xenditBalanceClient.getBalance()