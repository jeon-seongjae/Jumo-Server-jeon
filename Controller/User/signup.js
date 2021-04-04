const { user } = require('../../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.send('회원 정보를 입력해 주세요');          // 이부분은 클라에서 걸러주면 없애도 됨
    }
    // 패스워드 DB에 저장 전 해싱
    const hash = await bcrypt.hash(password, saltRounds);

    user
        .findOrCreate({
            where: { email: email },
            defaults: {
                username: username,
                password: hash
            }
        })
        .then(([result, created]) => {
            if (!created) {
                res.send('이미 존재한는 이메일 입니다.')
            } else {
                res.status(201).json({
                    data: result.dataValues,
                    message: '회원가입 완료!'
                });
            }
        })
};// catch로 서버에러를 만들어줘야하나?..