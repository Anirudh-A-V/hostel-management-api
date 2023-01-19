import express, { Response, Request } from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import logger from './middleware/Logger.js';

const app = express();
app.use(cors());
app.use(bodyparser.json());

// Databse connection middlewares

mongoose.set('strictQuery', true);
mongoose.connect(`${process.env.MY_CONNECTION_URL}`)
    .then(() => {
        logger.info("Connected to MongoDB");
    })
    .catch((err) => {
        logger.error("Error connecting to MongoDB", err);
    });

dotenv.config();

// Routing middlewares

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

// Error handling middlewares

// Server listening middlewares

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});




/*
 TODO: 
    -[x] Add logging
    -[ ] Add error handling
    -[ ] Add routes
    -[ ] Add authentication
    -[ ] Add authorization
    -[ ] Add testing
    -[ ] Add documentation 
*/