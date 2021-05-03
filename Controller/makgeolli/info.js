const { makgeolli } = require('../../models');

module.exports = async (req, res) => {
    await makgeolli
        .findAll()
        .then(result => {
            res.status(200).json({ data: result, message: "ok" });
        })
}