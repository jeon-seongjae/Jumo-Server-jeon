const { brewery } = require('../../models');

module.exports = async (req, res) => {
    const { name, address, number, kinds, map } = req.body;
    brewery
        .create(
            {
                name: name,
                address: address,
                number: number,
                kinds: kinds,
                map: map
            }
        )
        .then(result => {
            res.status(200).json({ data: result.dataValues, message: "ok" });
        })
}