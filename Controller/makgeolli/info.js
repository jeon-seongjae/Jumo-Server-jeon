const { makgeolli } = require('../../models');

module.exports = async (req, res) => {
    const { pageNum } = req.query;
    const pageNum2 = Number(pageNum);
    await makgeolli
        .findAll({
            offset: pageNum2, limit: 1
        })
        .then(result => {
            res.status(200).json({ data: result, message: "ok" });
        })
}

