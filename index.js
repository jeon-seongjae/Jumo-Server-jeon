const express = require('express');
require('dotenv').config();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

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