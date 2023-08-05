import dotenv from 'dotenv';

dotenv.config();


const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_USERNAME || '';
const MONGO_URI = process.env.MONGO_URI || '';


export const config = {
    server: {
        port: SERVER_PORT
    },
    mongo: {
        uri: MONGO_URI
    }
}