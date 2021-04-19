const { makgeolli, sequelize } = require('../../models');

module.exports = async (req, res) => {
    const { name } = req.body;
    await makgeolli
        .update(
            {
                views: sequelize.literal('views + 1')
            },
            {
                where: { name: name }
            }
        )
        .then(result => {
            makgeolli
                .findOne({
                    where: { name: name }
                })
                .then(result => {
                    res.status(200).json({ data: result, message: "ok" });
                })
        })

}

