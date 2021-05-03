const { brewery } = require('../../models');

module.exports = async (req, res) => {
    const { name } = req.body;
    brewery
        .findOne({
            where: { name: name }
        })
        .then(result => {
            res.status(200).json({ data: result, message: "ok" });
        })
}