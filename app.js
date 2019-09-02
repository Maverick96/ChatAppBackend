const express = require('express');
const app = express();
const cors = require('cors')
const morgan = require('morgan');
const bodyParser = require('body-parser');

// sequelize models
const models = require('./models');

// constants
const port = process.env.PORT || 5000;

// middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// routes handlers
const verifyUser = require('./routes/login');
const registerUser = require('./routes/register');
const logoutUser = require('./routes/logout')
//routes

app.post('/login', verifyUser);
app.post('/register', registerUser);
app.get('/logout', logoutUser)

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
    app.listen(port, () => console.log("server started at port " + port));
});
