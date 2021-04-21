const { makgeolli, sequelize } = require('../../models');
const { Op } = require('sequelize');

module.exports = async (req, res) => {
    const { query } = req.query;
    await makgeolli
        .findAll({
            where: {
                name: { [Op.like]: "%" + query + "%" }
            }
        })
        .then(result => {
            res.status(200).json({ data: result });
        })
}