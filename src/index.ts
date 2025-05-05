import express, { Request, Response, Application } from 'express';
// import cors from 'cors';
import bodyParser from 'body-parser';
import load from './config/env.config';
import report from './route/report.route';

const app: Application = express();

app.use(bodyParser.json({ limit: '100mb' }));
app.disable('x-powered-by');

const loadEnv = load.env();
const port = loadEnv.PORT ? Number(loadEnv.PORT) : 3001;
const host = loadEnv.APP_HOST || 'http://localhost:';

app.get('/', (req: Request, res: Response) => {
	return res.status(200).json('Welcome!');
});

app.use('/api/v1', report);

app.all('*', (req: Request, res: Response) => {
	return res.status(404).json({ message: 'What are you looking for' });
});

app.listen(port, () => {
	console.log(`Server running at ${host}${port}/`);
});
