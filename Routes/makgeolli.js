const express = require('express');
const router = express.Router();

const makgeolliInfo = require('../Controller/makgeolli/info');
const makgeolliList = require('../Controller/makgeolli/list');

router.get('/info', makgeolliInfo);
router.get('/list', makgeolliList);

module.exports = router;