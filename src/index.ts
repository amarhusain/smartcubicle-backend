import express, { Request, Response } from 'express';

import * as http from 'http';
import * as bodyparser from 'body-parser';
import cors from 'cors';
import { config } from './config/config';
import mongoose from 'mongoose';
import { CommonRoutesConfig } from './common/common.routes.config';
import { AuthRoutes } from './routes/auth.router';
import router from './routes/state.router';
import stateRouter from './routes/state.router';



const app: express.Application = express();

app.use(bodyparser.json());
app.use(cors());

app.use('/state', stateRouter)


const port = config.server.port;



app.get('/', (req: Request, res: Response) => {
    res.status(200).send(`Server is running at http://localhost:${port}`);
});

// Handling non matching request from client
app.use((req: Request, res: Response) => {
    res.status(404).send(`<h1>Requested url not found!</h1>`);
});

if (!config.mongo.uri) {
    throw new Error('Mongo URI must be defined.');
}


try {
    mongoose.connect(config.mongo.uri);
} catch (err) {
    throw new Error('Error connecting to database.')
}

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});