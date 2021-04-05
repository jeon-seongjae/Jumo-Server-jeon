const { review } = require('../../models');

module.exports = async (req, res) => {
    const { review_id } = req.body.data;

    review
        .destroy({
            where: { id: review_id }
        })
        .then(result => {
            res.status(200).json({ data: result.dataValues, message: "ok" });
        })
}