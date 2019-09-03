function handleConnection(io) {
    io.sockets.on('connection', function (socket) {
        console.log("COnnected!!");
        socket.on('register', function (data) {
            console.log("DATA!! ", data);
            socket.userId = data.userId;
            io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
        });

        socket.on('disconnect', function (data) {
            console.log("DIsconnected!")
        })

        socket.on('chat_message', function (message) {
            console.log("MESSAGE", message)
        });

    });

}

module.exports = handleConnection;