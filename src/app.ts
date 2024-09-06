import express from 'express';
import apiRoutes from './routes/apiRoutes';
import { errorHandler } from './utils/errorHandler';
import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const corsOptions = {
	origin: true, // Mengizinkan semua origin
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
	credentials: true, // Mengizinkan pengiriman cookies/kredensial
  };
app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());
app.use('/v1/api', apiRoutes);
app.use(errorHandler);

export default app;
