const { makgeolli } = require('../../models');

module.exports = async (req, res) => {
    const { name, views } = req.body;
    await makgeolli
        .update(
            {
                views: views
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

