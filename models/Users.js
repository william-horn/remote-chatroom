const { Model, DataTypes } = require('sequelize');
const sequelizeConnection = require('../config/sequelizeConnection');

class User extends Model {}

console.log('Creating User model...');

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pw: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelizeConnection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    //tableName: 'users'
})

console.log('User model successfully created');

module.exports = User;