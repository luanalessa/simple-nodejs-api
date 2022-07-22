import express from 'express'
import connect from './db/connect.js';
import router from './routers/index.js';
import 'dotenv/config'

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT, () => {
    console.log(`Server listing on ${process.env.PORT}`)

    connect();

    router(app);
})