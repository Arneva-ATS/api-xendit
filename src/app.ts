import express from 'express';
import apiRoutes from './routes/apiRoutes';
import { errorHandler } from './utils/errorHandler';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use('/v1/api', apiRoutes);
app.use(errorHandler);

export default app;