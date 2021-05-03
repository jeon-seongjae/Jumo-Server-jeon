const { user } = require('../../models');

module.exports = async (req, res) => {
    const { username } = req.body;
    user
        .update(
            {
                username: username
            },
            {
                where: { id: res.locals.userId }
            }
        )
        .then(result => {
            res.status(200).json({ message: "변경완료!" });
        })
}