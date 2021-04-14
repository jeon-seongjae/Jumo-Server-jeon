const { makgeolli } = require('../../models');

module.exports = async (req, res) => {
    const { id } = req.body;
    makgeolli
        .destroy({
            where: { id: id }
        })
        .then(result => {
            res.status(200).json({ message: "ok" });
        })
}
