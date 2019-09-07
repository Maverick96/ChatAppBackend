const express = require('express');
const app = express();
const cors = require('cors')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);

// sequelize models
const models = require('./models');

// constants
const port = process.env.PORT || 5001;

// middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// utils
const handleSockets = require('./utils/handleConnections');
const verifyToken = require('./utils/verifyToken');

// routes handlers
const verifyUser = require('./routes/login');
const registerUser = require('./routes/register');
const logoutUser = require('./routes/logout')
const fetchOnlineUsers = require('./routes/fetchOnlineUsers');
const fetchMessages = require('./routes/fetchMessages');


handleSockets(io);


//routes
app.post('/login', verifyUser);
app.post('/register', registerUser);
app.get('/logout', verifyToken, logoutUser);
app.get('/onlineUsers', verifyToken, fetchOnlineUsers);
app.post('/fetchMessages', verifyToken, fetchMessages);

// Error Handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

// connect db
models.sequelize.sync().then(function () {
    http.listen(port, () => console.log("server started at port " + port));
});
