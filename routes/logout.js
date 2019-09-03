const jwt = require('jsonwebtoken');
const keys = require('../config/constants')
// models
const models = require('../models');
const UserToken = models.UserToken;

function logoutUser(req, res, next) {
    const authData = req['authData'];
    if (authData.userId) {
        UserToken.destroy({
            where: {
                userId: authData.userId
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
        console.log("UserId not present")
        next(new Error("Unauthorised access"));
    }
}

module.exports = logoutUser;