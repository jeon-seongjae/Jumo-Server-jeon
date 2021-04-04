const { brewery } = require('../../models');

module.exports = async (req, res) => {
    await brewery
        .findAll()
        .then(result => {
            res.status(200).json({ data: result.dataValues, message: "ok" });
        })
}