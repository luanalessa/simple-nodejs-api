const express = require('express');
const connect = require('./src/db/connect.js');
const router = require('./src/routers/index.js')
require('dotenv').config()

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listing on ${process.env.PORT || 3000}`)

    connect();

})