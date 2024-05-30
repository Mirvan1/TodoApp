const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    Id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false
    },
    Firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Lastname: {
        type: DataTypes.STRING
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'User',
    timestamps: true, 
    deletedAt: 'DeletedAt',
    createdAt:'CreatedAt',
    updatedAt: false,  
    paranoid: true
});

module.exports = User;
