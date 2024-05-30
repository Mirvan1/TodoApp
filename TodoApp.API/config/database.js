const { Sequelize } = require('sequelize');

// Set up the connection
const sequelize = new Sequelize('ToDoDB', 'postgres', '12345', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false, // Turn off SQL logging in console,
    port:5432,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;
