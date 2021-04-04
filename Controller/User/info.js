const { user } = require('../../models');

module.exports = async (req, res) => {
    await user
        .findAll({
            where: { id: res.locals.userId }
        })
        .then(result => {
            if (!result) {
                res.status(401).json({ data: null, message: '존재하지 않는 유저입니다.' });
            } else {
                res.status(200).json({
                    data: result.dataValues,
                    message: 'ok'
                });
            }
        })
        .catch((err) => {
            res.status(404).json({ message: 'not found' });                    //여기있는 모든 에러부분 코드들은 사실 미들웨어에서 다 거치는데 필요한가 나중에 직접 포스트맨으로 확인하면서 필요없으면 다 없애자
        });                                                                    //가짜 토큰을 클라쪽에서 보낼 수 가 있나?
}