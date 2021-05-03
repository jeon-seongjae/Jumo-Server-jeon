const { review, makgeolli } = require('../../models');

module.exports = async (req, res) => {
    const { star, comment, image, name, username } = req.body;
    makgeolli
        .findOne({
            where: { name: name }
        })
        .then(result => {
            review
                .create(
                    {
                        makgeolli_id: result.dataValues.id,
                        user_id: res.locals.userId,
                        star: star,
                        comment: comment,
                        image: image,
                        username: username
                    },
                )
                .then(last => {
                    res.status(200).json({ data: last.dataValues, message: "ok" });
                })
        })

}