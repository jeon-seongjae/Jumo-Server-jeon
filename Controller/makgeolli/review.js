const { review } = require('../../models');

module.exports = async (req, res) => {
    const { makgeolli_id } = req.body;
    review
        .findAll({
            where: { makgeolli_id: makgeolli_id }
        })
        .then(result => {
            res.status(200).json({ data: result, message: "ok" });
        })
}