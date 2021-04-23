const { makgeolli, sequelize } = require('../../models');
const { Op } = require('sequelize');

module.exports = async (req, res) => {
    const { query, pageNum } = req.query;
    const pageNum2 = Number(pageNum);
    await makgeolli
        .findAll({
            where: {
                name: { [Op.like]: "%" + query + "%" }
            },
            offset: pageNum2, limit: 1
        })
        .then(result => {
            res.status(200).json({ data: result });
        })
}