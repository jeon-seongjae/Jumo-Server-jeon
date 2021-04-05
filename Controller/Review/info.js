const { review } = require('../../models');

module.exports = async (req, res) => {
    review
        .findAll({
            where: { id: res.locals.userId }
        })
        .then(result => {
            res.status(200).json({ data: result.dataValues, message: "ok" });
        })
}