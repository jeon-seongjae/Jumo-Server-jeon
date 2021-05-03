const { makgeolli } = require('../../models');

module.exports = async (req, res) => {
    const { name } = req.body;
    makgeolli
        .findOne({
            where: { name: name }
        })
        .then(result => {
            res.status(200).json({ data: result, message: "ok" });
        })
}