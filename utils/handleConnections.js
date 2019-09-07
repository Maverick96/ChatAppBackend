const sentimentAnalysis = require('./sentimentAnalysis');
const models = require('../models');
const Message = models.Message;
const socketMap = {};

function handleConnection(io) {
    io.sockets.on('connection', function (socket) {

        socket.on('register', data => {
            console.log("REGI ", data);
            socket.userId = data.userId;
            socketMap[data.userId] = socket;
        });

        socket.on('peer-connection', data => {
            console.log("Receiver key:", data.receiverId);
            const receiverSocket = socketMap[data.receiverId];
            if (receiverSocket) {
                console.log("Socket present");
                receiverSocket.emit('peer-key', data);
            }
        })

        socket.on('message', function (data) {
            console.log("DATA!! ", data);
            console.log("SenderId", socket.userId)
            // if the socket is lost, update it
            if (!socket.userId) {
                socket.userId = data.senderId;
                socketMap[data.userId] = socket;
            }
            const receiverSocket = socketMap[data.receiverId];
            const senderSocket = socketMap[data.senderId];
            // socket.userId = data.userId;
            sentimentAnalysis(data.msg)
                .then(response => {
                    console.log("SEntiment ", response);
                    const queryParameter = {
                        chatId: data.chatId,
                        message: data.msg,
                        sentiment: response.polarity,
                        senderId: data.senderId
                    };
                    // sent msg to client with sentiment
                    if (senderSocket) {
                        senderSocket.emit(`message`, {
                            message: data.msg,
                            sentiment: response.polarity,
                            index: data.index,
                            senderId: data.senderId
                        });
                    }
                    // create entry in db
                    /*
                     TODO :
                        - create seprate insert query, then update row when response from api is received(if api fails, insert will also fail )
                        - allowNull for sentiment
                    */
                    return Message.create(queryParameter)
                })
                .then(messageData => {
                    console.log("Message Added!");
                })
                .catch(err => {
                    console.error(err);
                })
            console.log("Receiver ", data.receiverId);
            // send to receiver user
            if (receiverSocket) {
                receiverSocket.emit(`message`, { message: data.msg, senderId: data.senderId });
            }

        });

        socket.on('disconnect', function (data) {
            console.log("DIsconnected!", socket.userId);
            if (socket.userId) {
                delete socketMap[socket.userId]
            }
        })

    });

}

module.exports = handleConnection;