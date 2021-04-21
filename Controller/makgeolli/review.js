const { review } = require('../../models');

module.exports = async (req, res) => {
    const { makgeolli_id } = req.query;
    const makgeolli_id2 = Number(makgeolli_id);
    review
        .findAll({
            where: { makgeolli_id: makgeolli_id2 }
        })
        .then(result => {
            res.status(200).json({ data: result, message: "ok" });
        })
}