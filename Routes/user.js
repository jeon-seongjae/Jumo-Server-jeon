const express = require('express');
const router = express.Router();

const userLogin = require('../Controller/User/login');
const userLogout = require('../Controller/User/logout');
const userSignup = require('../Controller/User/signup');
const userInfo = require('../Controller/User/info');
const refreshTokenRequest = require('../Controller/User/refreshTokenRequest');

const auth = require('../middleware/auth');


router.get('/info', auth, userInfo);
router.post('/signup', userSignup);
router.post('/logout', auth, userLogout);
router.post('/login', userLogin);;
router.post('/refereshToken', refreshTokenRequest)

module.exports = router;