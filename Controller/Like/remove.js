const { like, makgeolli, user } = require('../../models');

module.exports = async (req, res) => {
    const { makgeolli_id, likes } = req.body.data;
    makgeolli
        .updata(
            {
                likes: likes
            },
            {
                where: makgeolli_id
            }
        ).then(result => {
            like
                .destroy({
                    where: { makgeolli_id: result.dataValues.id, user_id: res.locals.userId } //아마 이렇게 되면 유저 테이블에도 삭제 해줘야 할텐데 그건 포스트맨 하면서 확인해보자
                })
        })
}