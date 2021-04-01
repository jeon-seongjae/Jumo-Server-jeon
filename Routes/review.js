const express = require('express');
const router = express.Router();

router.get('/info');
router.post('/create');
router.put('/update');
router.delete('/remove');

module.exports = router;