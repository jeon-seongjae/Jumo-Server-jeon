const express = require('express');
const router = express.Router();

const socialLogin = require('../Controller/social/auth');

router.post('/googlelogin', socialLogin.googlelogin);

module.exports = router;