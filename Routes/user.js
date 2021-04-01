const express = require('express');
const router = express.Router();

router.get('/info');
router.post('/signup');
router.post('/logout');
router.post('/login');

module.exports = router;