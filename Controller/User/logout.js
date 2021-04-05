const { user } = require('../../models');

module.exports = async (req, res) => {
    await user
        .findOne({
            where: { id: res.locals.userId },
        })
        .then((result) => {
            res.cookie('refreshToken', '').json({ message: '로그아웃 완료' });
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json({ message: 'not found' });
        });
};
