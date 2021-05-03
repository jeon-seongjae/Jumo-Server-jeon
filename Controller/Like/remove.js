const { like, makgeolli } = require('../../models');

module.exports = async (req, res) => {
    const { makgeolli_id, likes, id } = req.body;
    makgeolli
        .update(
            {
                likes: likes
            },
            {
                where: { id: makgeolli_id }
            }
        ).then(result => {
            like
                .destroy({
                    where: { id: id }
                })
                .then(last => {
                    res.status(200).json({ message: "삭제완료" });
                })
        })
}
