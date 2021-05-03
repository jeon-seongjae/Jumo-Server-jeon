const { brewery } = require('../../models');

module.exports = async (req, res) => {
    const { id } = req.body;
    brewery
        .destroy({
            where: { id: id }
        })
        .then(result => {
            res.status(200).json({ message: "ok" });
        })
}