const jwt = require('jsonwebtoken');
const keys = require('../config/constants')
// models
const models = require('../models');
const UserToken = models.UserToken;

function logoutUser(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ');
        const token = bearer[1];
        const payload = jwt.verify(token, keys.secret);
        UserToken.destroy({
            where: {
                userId: payload.userId
            }
        })
            .then(tokenData => {
                res.json({
                    success: true
                })
            })
            .catch(err => {
                console.log(err);
                next(err);
            })
    } else {
        next(new Error("Unauthorised access"));
    }
}

module.exports = logoutUser;