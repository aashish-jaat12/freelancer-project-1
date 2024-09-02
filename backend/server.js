import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import db from './db.js'
import Contactrouter from './router/contsct.js'

const port = process.env.PORT || 3000;

const app = express();
dotenv.config()
app.use(express.json());
app.use(cors());

// db connact//
db()

//////api////

app.use('/api', Contactrouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
