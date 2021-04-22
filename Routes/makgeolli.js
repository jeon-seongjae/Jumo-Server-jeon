const express = require('express');
const router = express.Router();

const makgeolliInfo = require('../Controller/makgeolli/info');
const makgeolliList = require('../Controller/makgeolli/list');
const makgeolliReview = require('../Controller/makgeolli/review');
const makgeolliRank = require('../Controller/makgeolli/rank');
const makgeolliRemove = require('../Controller/makgeolli/remove');
const makgeolliSearch = require('../Controller/makgeolli/search');

router.get('/info', makgeolliInfo);
router.get('/list', makgeolliList);
router.get('/review', makgeolliReview);
router.get('/rank', makgeolliRank);
router.post('/remove', makgeolliRemove);
router.get('/search', makgeolliSearch);

module.exports = router;