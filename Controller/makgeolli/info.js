const { makgeolli } = require('../../models');

module.exports = async (req, res) => {
    const { pageNum } = req.body;
    await makgeolli
        .findAll({
            offset: pageNum, limit: 1
        })
        .then(result => {
            res.status(200).json({ data: result, message: "ok" });
        })
}

