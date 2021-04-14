const express = require('express');
const router = express.Router();

const makgeolliInfo = require('../Controller/makgeolli/info');
const makgeolliList = require('../Controller/makgeolli/list');
const makgeolliReview = require('../Controller/makgeolli/review');
const makgeolliCreate = require('../Controller/makgeolli/create');
const makgeolliRank = require('../Controller/makgeolli/rank');
const makgeolliRemove = require('../Controller/makgeolli/remove');

router.get('/info', makgeolliInfo);
router.get('/list', makgeolliList);
router.get('/review', makgeolliReview);
router.get('/rank', makgeolliRank);
router.post('/create', makgeolliCreate);
router.delete('/remove', makgeolliRemove);

module.exports = router;