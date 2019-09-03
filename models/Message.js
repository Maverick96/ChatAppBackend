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
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {});
    Message.associate = function (models) {
        // associations can be defined here
        const Chat = models.Chat;
        Chat.hasMany(Message, { foreignKey: 'chatId', sourceKey: 'chatId' });
    };
    return Message;
};
