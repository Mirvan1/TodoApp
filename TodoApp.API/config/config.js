const { Sequelize } = require('sequelize');

//Set up the connection
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

require('dotenv').config(); // Make sure to require dotenv to load the environment variables
console.log("Sequelize configuration:", JSON.stringify({
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}, null, 2));

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
    dialectOptions: {
        ssl: {
            require: true, // This might still be necessary if you're connecting to a Heroku Postgres instance
            rejectUnauthorized: false // Necessary if SSL is used
        }
    }
});

module.exports = sequelize;
