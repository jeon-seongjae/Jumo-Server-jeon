const { like, makgeolli } = require('../../models');

module.exports = async (req, res) => {
    const { name, likes } = req.body.data;  // 여기서는 아이디로 해도되고 막걸리 이름으로 해도 될듯 이건 클라랑 얘기해보고 정하자
    makgeolli
        .update(
            {
                likes: likes    //클라에서 총 좋아요수를 보내주는 걸로 하자  
            },
            {
                where: {
                    id: name
                }
            })
        .then(result => {
            like
                .create({
                    makgeolli_id: result.datavalues.id,           // 여기서 막걸리 아이디를 req에서 받은 걸 써도 되나모르겠다 포스트맨으로 확인해보자
                    user_id: res.locals.userId
                })
                .then(last => {
                    res.status(200).json({ data: last.dataValues, message: "ok" });
                })
        })
}

//스키마 수정이 필요할 듯 왜냐햐면 내 like 테이블에는 like값이 필요하지 않음 무조건 true이기 때문에 
//또 문제 발견 user테이블에 다른 테이블 아이디 값이 있을 필요가 없다..


//refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicmV2aWV3X2lkIjpudWxsLCJsaWtlX2lkIjpudWxsLCJ1c2VybmFtZSI6Implb24iLCJlbWFpbCI6InRqZHdvZWs2MkBnbWFpbC5jb20iLCJjcmVhdGVkQXQiOiIyMDIxLTA0LTA1VDA4OjU2OjQ1LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTA0LTA1VDA4OjU2OjQ1LjAwMFoiLCJpYXQiOjE2MTc2MzE0ODksImV4cCI6MTYyMDIyMzQ4OX0._YVwfkTS54Gd3C1y076U268MG4WEVez5fO9lYoUmiKU; Path=/; HttpOnly; Secure; SameSite=None
