import express, { Request, Response } from 'express';

import * as http from 'http';
import * as bodyparser from 'body-parser';
import cors from 'cors';
import { config } from './config/config';
import mongoose from 'mongoose';
import { CommonRoutesConfig } from './common/common.routes.config';
import { AuthRoutes } from './routes/auth.router';



const app: express.Application = express();
const server: http.Server = http.createServer(app);
const routes: Array<CommonRoutesConfig> = [];

app.use(bodyparser.json());
app.use(cors());

routes.push(new AuthRoutes(app));

const port = config.server.port;



app.get('/', (req: Request, res: Response) => {
    res.status(200).send(`Server is Amar running at http://localhost:${port}`);
});

if (!config.mongo.uri) {
    throw new Error('Mongo URI must be defined.');
}

try {
    mongoose.connect(config.mongo.uri);
} catch (err) {
    throw new Error('Error connecting to database.')
}

server.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});