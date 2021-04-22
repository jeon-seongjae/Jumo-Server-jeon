const { like, makgeolli, sequelize } = require('../../models');

module.exports = async (req, res) => {
    const { name, id } = req.body;
    makgeolli
        .update(
            {
                likes: sequelize.literal('likes - 1')
            },
            {
                where: { name: name }
            }
        ).then(() => {
            like
                .destroy({
                    where: { id: id }
                })
                .then(() => {
                    res.status(200).json({ message: "삭제완료" });
                })
        })
}
