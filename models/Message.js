module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
        messageId: {
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        chatId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Chats',
                key: 'chatId'
            }
        },
        senderId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'userId'
            }
        },
        message: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        sentiment: {
            type: DataTypes.STRING,
        },
    }, {
            // to allow emoji to be stored in db
            charset: "utf8mb4",
            collation: "utf8mb4_bin"
        });
    Message.associate = function (models) {
        // associations can be defined here
        const Chat = models.Chat;
        const User = models.User;
        Chat.hasMany(Message, { foreignKey: 'chatId', sourceKey: 'chatId' });
        User.hasMany(Message, { foreignKey: 'senderId', sourceKey: 'userId' });
    };
    return Message;
};
