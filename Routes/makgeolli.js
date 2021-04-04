const express = require('express');
const router = express.Router();

const makgeolliInfo = require('../Controller/makgeolli/info');

router.get('/info', makgeolliInfo);

module.exports = router;