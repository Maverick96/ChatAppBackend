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
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {});
    Message.associate = function (models) {
        // associations can be defined here
        const Chat = models.Chat;
        const User = models.User;
        Chat.hasMany(Message, { foreignKey: 'chatId', sourceKey: 'chatId' });
        User.hasMany(Message, { foreignKey: 'senderId', sourceKey: 'userId' });
    };
    return Message;
};
