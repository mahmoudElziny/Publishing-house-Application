import express from 'express';

import { connectionDB } from "./DB/connection.js";



const app = express();
const port = 3000;

connectionDB();

app.use(express.json());



app.listen(port, () => console.log(`App listening on port ${port}`));