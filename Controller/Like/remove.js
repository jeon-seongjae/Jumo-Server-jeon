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
                    where: { makgeolli_id: result.dataValues.id, user_id: res.locals.userId } //테이블에 고유 아이디가 클라한테 있으면 그걸로 찾으면 될듯하다
                })
        })
}