const { makgeolli, brewery } = require('../../models');

module.exports = async (req, res) => {
    const { id, name, area, content, explain, material, likes, views, image } = req.body;
    makgeolli
        .create(
            {
                brewery_id: id,
                name: name,
                area: area,
                content: content,
                explain: explain,
                material: material,
                likes: likes,
                views: views,
                image: image
            }
        )
        .then(result => {
            res.status(200).json({ data: result.dataValues });
        })
}

