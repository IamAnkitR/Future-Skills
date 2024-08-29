import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes.cardRoutes);

app.get('/ping', (req: Request, res: Response) => {
  res.send('Server is up and running');
});

export default app;
