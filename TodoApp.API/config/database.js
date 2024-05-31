const { Sequelize } = require('sequelize');

// Set up the connection
// const sequelize = new Sequelize('ToDoDB', 'postgres', '12345', {
//     host: 'localhost',
//     dialect: 'postgres',
//     logging: false, // Turn off SQL logging in console,
//     port:5432,
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// });

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false 
        }
    }
});

module.exports = sequelize;
