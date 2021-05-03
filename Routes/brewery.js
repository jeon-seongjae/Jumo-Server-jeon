const express = require('express');
const router = express.Router();

const breweryInfo = require('../Controller/Brewery/info');
const breweryList = require('../Controller/Brewery/list');
const breweryCreate = require('../Controller/Brewery/create');

router.get('/info', breweryInfo);
router.get('/list', breweryList);
router.post('/create', breweryCreate);

module.exports = router;