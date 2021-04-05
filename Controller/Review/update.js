const { review } = require('../../models');

module.exports = async (req, res) => {
    const { star, comment, image, review_id } = req.body.data;
    review
        .updata(
            {
                star: star,
                comment: comment,
                image: image
            },
            {
                where: { id: review_id }
            }
        )
        .then(result => {
            res.status(200).json({ data: result.dataValues, message: "ok" });
        })
}