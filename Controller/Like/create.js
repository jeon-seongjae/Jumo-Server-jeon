const { like, makgeolli, sequelize } = require('../../models');

module.exports = async (req, res) => {
    const { name } = req.body;
    await makgeolli
        .update(
            {
                likes: sequelize.literal('likes + 1')
            },
            {
                where: { name: name }
            })
        .then(() => {
            makgeolli
                .findOne({
                    where: { name: name }
                })
                .then(result => {
                    like
                        .create({
                            makgeolli_id: result.dataValues.id,
                            user_id: res.locals.userId,
                            like: true
                        })
                        .then(last => {
                            res.status(200).json({ data: last, message: "ok" });
                        })
                })

        })
}

//스키마 수정이 필요할 듯 왜냐햐면 내 like 테이블에는 like값이 필요하지 않음 무조건 true이기 때문에 
//또 문제 발견 user테이블에 다른 테이블 아이디 값이 있을 필요가 없다..
