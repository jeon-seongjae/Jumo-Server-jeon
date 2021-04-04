const express = require('express');
const router = express.Router();

const breweryInfo = require('../Controller/Brewery/info');

router.get('/info', breweryInfo);

module.exports = router;