import express from 'express';

import { connectionDB } from "./DB/connection.js";

import bookRouter from './src/modules/Book/book.routes.js';
import authorRouter from './src/modules/Author/author.routes.js';
import specialEndPonitsRouter from './src/modules/SpecialEndPoints/specialEndPoints.routes.js';


const app = express();
const port = 3000;

connectionDB();

app.use(express.json());

app.use('/book', bookRouter);
app.use('/author', authorRouter);
app.use('/specialEndPoints', specialEndPonitsRouter)




app.listen(port, () => console.log(`App listening on port ${port}`));