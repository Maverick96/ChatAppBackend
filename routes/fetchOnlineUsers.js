// models
const models = require('../models');
const UserToken = models.UserToken;

const sequelize = require('sequelize');
const {
    Op
} = sequelize


function fetchOnlineUsers(req, res, next) {
    UserToken.findAndCountAll({
        attributes: [
            'userId', 'name'
        ],
        where: {
            userId: {
                [Op.ne]: req.authData.userId
            }
        }
    })
        .then(onlineUsers => {
            console.log("Online ", onlineUsers.rows);
            res.json({
                result: onlineUsers.rows,
                total: onlineUsers.count
            })
        })
        .catch(err => {
            console.error(err);
            next(err);
        })
}

module.exports = fetchOnlineUsers;