const { like } = require('../../models');

module.exports = async (req, res) => {
    // console.log(res.locals.userId);
    like
        .findAll({
            where: { user_id: res.locals.userId }
        })
        .then(result => {
            res.status(200).json({ data: result, message: "ok" });
        })
}