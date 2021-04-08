const { review } = require('../../models');

module.exports = async (req, res) => {
    const { star, comment, image, review_id } = req.body;
    review
        .update(
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
            res.status(200).json({ data: result, message: "ok" });
        })
}