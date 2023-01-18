import express, { Response, Request } from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
app.use(bodyparser.json());
app.use(cors());

dotenv.config();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


mongoose.set('strictQuery', true);
mongoose.connect(`${process.env.MY_CONNECTION_URL}`)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB", err);
    });
