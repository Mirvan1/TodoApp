const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Todo = sequelize.define('Todo', {
    Id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      Title: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      Description: {
        type: DataTypes.TEXT, 
        allowNull: true
      },
      Status: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0  
      },
      CreatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      DeletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      DueDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'Id'     
        }
      }
    }, {
      sequelize,
      modelName: 'Todo',
      tableName: 'Todo', 
      timestamps: true,  
      deletedAt: 'DeletedAt',
      createdAt:'CreatedAt',
    updatedAt: false,  
      underscored: false  
});


module.exports=Todo;