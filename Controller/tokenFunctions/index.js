require('dotenv');
const { sign, verify } = require('jsonwebtoken');

module.exports = {
    generateAccessToken: (data) => {
        //accessToken 생성
        return sign(data, process.env.ACCESS_SECRET, { expiresIn: '12h' });
    },
    generateRefreshToken: (data) => {
        //refreshToken 생성
        return sign(data, process.env.REFRESH_SECRET, { expiresIn: '30d' });
    },
    sendAccessToken: (res, accessToken) => {
        //accessToken 전송
        res.json({
            data: { accessToken: accessToken },
            message: 'ok'
        });
    },
    sendRefreshToken: (res, refreshToken) => {
        //cookie 생성 및 refreshToken 전송
        res.cookie('refreshToken', refreshToken, {
            path: "/",
            httpOnly: true,
            secure: true,
            sameSite: "none"
        });
    },
    resendNewAccessToken: (res, accessToken, data) => {
        //NewAccessToken 전송
        res.json({
            data: { accessToken: accessToken, userinfo: data },
            message: 'ok'
        });
    },
    isAuthorized: (req) => {
        const authorization = req.headers.authorization;
        if (!authorization) {
            return null;
        }
        const token = authorization.split(' ')[1];
        try {
            return verify(token, process.env.ACCESS_SECRET);
        } catch (e) {
            return null;
        }
    },
    checkRefreshToken: (refreshToken) => {
        try {
            return verify(refreshToken, process.env.REFRESH_SECRET);
        } catch (e) {
            return null;
        }
    }
};