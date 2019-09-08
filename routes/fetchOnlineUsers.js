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
            [sequelize.literal('DISTINCT `userId`'), 'userId'], 'name' // get only distinct users
        ],
        where: {
            userId: {
                // fetch all users except the current user
                [Op.ne]: req.authData.userId
            }
        }
    })
        .then(onlineUsers => {
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