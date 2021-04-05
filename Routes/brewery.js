const express = require('express');
const router = express.Router();

const breweryInfo = require('../Controller/Brewery/info');
const breweryList = require('../Controller/Brewery/list');

router.get('/info', breweryInfo);
router.get('/info', breweryList);

module.exports = router;