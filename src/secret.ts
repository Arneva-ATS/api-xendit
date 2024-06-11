import dotenv from 'dotenv';

dotenv.config({ path: '.env' })

export const { PORT, SECRET_API_KEY } = process.env