const { review } = require('../../models');

module.exports = async (req, res) => {
    const { review_id } = req.body;
    review
        .destroy({
            where: { id: review_id }
        })
        .then(result => {
            res.status(200).json({ message: "삭제완료" });
        })
}