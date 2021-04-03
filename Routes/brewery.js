const express = require('express');
const router = express.Router();

const breweryInfo = require('../Controller/Brewery/info');

const auth = require('../middleware/auth');

router.get('/info', auth, breweryInfo);

module.exports = router;