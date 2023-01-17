import express, { Response, Request } from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

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


