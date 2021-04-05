const { like } = require('../../models');

module.exports = async (res, req) => {
    like
        .findAll({
            where: { id: res.locals.userId }
        })
        .then(result => {
            res.status(200).json({ data: result.dataValues, message: "ok" });
        })
}