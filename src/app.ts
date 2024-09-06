import express from 'express';
import apiRoutes from './routes/apiRoutes';
import { errorHandler } from './utils/errorHandler';
import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
// Konfigurasi CORS yang lebih spesifik
const corsOptions = {
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
	allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
	credentials: true, // Jika Anda menggunakan kredensial seperti cookies, pastikan ini diatur
  };
app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());
app.use('/v1/api', apiRoutes);
app.use(errorHandler);

export default app;
