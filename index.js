const express = require('express');
require('dotenv').config();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const userRouter = require('./Routes/user');
const reviewRouter = require('./Routes/review');
const makgeolliRouter = require('./Routes/makgeolli');
const likeRouter = require('./Routes/like');
const breweryRouter = require('./Routes/brewery');

const app = express();

app.use(
    cors({
        origin: true,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    })
);

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/user', userRouter);
app.use('/review', reviewRouter);
app.use('/makgeolli', makgeolliRouter);
app.use('/like', likeRouter);
app.use('/brewery', breweryRouter);

app.use('/', (req, res) => {
    res.send(`😎 hello jumo!!`);
});

app.use((err, req, res, next) => {
    console.log('error:', err);
});

let server;
const PORT = 4000;

server = app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});

module.exports = server;