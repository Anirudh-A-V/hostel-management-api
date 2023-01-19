import express, { Response, Request } from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import logger from './middleware/Logger.js';

const app = express();
app.use(bodyparser.json());
app.use(cors());

dotenv.config();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});


mongoose.set('strictQuery', true);
mongoose.connect(`${process.env.MY_CONNECTION_URL}`)
    .then(() => {
        logger.info("Connected to MongoDB");
    })
    .catch((err) => {
        logger.error("Error connecting to MongoDB", err);
    });

// @TODO - Add logging
// @TODO - Add error handling
// @TODO - Add routes
// @TODO - Add authentication
// @TODO - Add authorization
// @TODO - Add testing
// @TODO - Add documentation 