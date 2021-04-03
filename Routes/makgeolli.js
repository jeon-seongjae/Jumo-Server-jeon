const express = require('express');
const router = express.Router();

const makgeolliInfo = require('../Controller/makgeolli/info');

const auth = require('../middleware/auth');

router.get('/info', auth, makgeolliInfo);

module.exports = router;