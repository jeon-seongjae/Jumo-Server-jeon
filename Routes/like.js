const express = require('express');
const router = express.Router();

const likeCreate = require('../Controller/Like/create');
const likeRemove = require('../Controller/Like/remove');

const auth = require('../middleware/auth');

router.post('/create', auth, likeCreate);
router.delete('/remove', auth, likeRemove);
// 이부분 다시 생각하자 막걸리에 있는 좋아요는 디폴트지만 마이페이지에 생성되는 좋아요는 새로 생성되어야 할 것 이다 

module.exports = router;