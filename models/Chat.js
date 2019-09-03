module.exports = (sequelize, DataTypes) => {
    const Chat = sequelize.define('Chat', {
        chatId: {
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            unique: true
        },
        userId1: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        userId2: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        }
    }, {});
    Chat.associate = function (models) {
        // associations can be defined here
    };
    return Chat;
};
