import express, {Express, Request, Response} from 'express';
import { PORT, SECRET_API_KEY } from './secret';
import rootRouter from './routes';

const app:Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.send('working');
})
app.use('/api', rootRouter);

app.listen(PORT, ()=>{console.log('Listening Port From: ', PORT )})