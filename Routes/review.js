const express = require('express');
const router = express.Router();

const reviewCreate = require('../Controller/Review/create');
const reviewRemove = require('../Controller/Review/remove');
const reviewUpdate = require('../Controller/Review/update');
const reviewInfo = require('../Controller/Review/info');

const auth = require('../middleware/auth');

router.get('/info', auth, reviewInfo);
router.post('/create', auth, reviewCreate);
router.put('/update', auth, reviewUpdate);
router.post('/remove', auth, reviewRemove);

module.exports = router;