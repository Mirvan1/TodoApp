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
        ssl: true
    }
}, null, 2));

const {sequelize} = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false  // Necessary to avoid "self-signed certificate" errors
        }
    },
    logging: true  // Optional: for debugging SQL queries
});

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));


    

module.exports = sequelize;
