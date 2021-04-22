const { makgeolli, sequelize } = require('../../models');
const { Op } = require('sequelize');

module.exports = async (req, res) => {
    const { query, pageNum, limit } = req.query;
    const pageNum2 = Number(pageNum);
    const limit2 = Number(limit);
    await makgeolli
        .findAll({
            where: {
                name: { [Op.like]: "%" + query + "%" }
            },
            offset: pageNum2, limit: limit2
        })
        .then(result => {
            res.status(200).json({ data: result });
        })
}