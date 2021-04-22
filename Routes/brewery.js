const express = require('express');
const router = express.Router();

const breweryInfo = require('../Controller/Brewery/info');
const breweryList = require('../Controller/Brewery/list');
const breweryRemove = require('../Controller/Brewery/remove');

router.get('/info', breweryInfo);
router.get('/list', breweryList);
router.post('/remove', breweryRemove);

module.exports = router;