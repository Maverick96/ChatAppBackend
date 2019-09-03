
/* check if request has chatId, 

if not then query from chat table
and send chatId along with messages
*/

const models = require('../models');
const Chat = models.Chat;
const Message = models.Message;
const sequelize = require('sequelize');
const {
    Op
} = sequelize;

function fetchChatId(user1, user2) {
    return Chat.findOne({
        where: {
            userId1: user1,
            userId2: user2
        }
    })
        .then(chatDetails => {
            console.log("CHAT details", chatDetails);
            // if new chat, then create chatId
            if (!chatDetails) {
                return Chat.create({
                    userId1: user1,
                    userId2: user2
                })
            }
            return chatDetails;
        })
}

function queryMessages(chatId, res) {
    return Message.findAndCountAll({
        where: {
            chatId
        },
        attributes: ['messageId', 'message']
    })
        .then(messageData => {
            console.log("DATA", messageData);
            res.json({
                result: messageData.rows,
                chatId
            })
        })
}


function fetchMessage(req, res, next) {
    let chatId = req.body.chatId;
    if (!chatId) {
        // query chat id, if not present then create
        let user1, user2;
        // user1's id will smaller than user2(easier to query messages, don't have to write Or clause)
        if (req.body.user1 < req.body.user2) {
            user1 = req.body.user1;
            user2 = req.body.user2;
        } else {
            user2 = req.body.user1;
            user1 = req.body.user2;
        }
        fetchChatId(user1, user2)
            .then(chatData => {
                console.log("Data ", chatData)
                chatId = chatData.dataValues.chatId;
                return queryMessages(chatId, res);
            })
            .catch(err => {
                console.error(err);
            })
    } else {
        queryMessages(chatId, res)
            .catch(err => {
                console.error(err);
                next(err);
            });

    }
}

module.exports = fetchMessage;