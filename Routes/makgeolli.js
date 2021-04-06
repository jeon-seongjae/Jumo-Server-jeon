const express = require('express');
const router = express.Router();

const makgeolliInfo = require('../Controller/makgeolli/info');
const makgeolliList = require('../Controller/makgeolli/list');
const makgeolliReview = require('../Controller/makgeolli/review');

router.get('/info', makgeolliInfo);
router.get('/list', makgeolliList);
router.get('/review', makgeolliReview);

module.exports = router;