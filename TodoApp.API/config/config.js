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

const sequelize = new Sequelize('postgres://uc1kpf4aju7shh:p4988210d048d7703bd8db8e3b107a09c0fff074e8196bde6879eba770d03f72f@cat670aihdrkt1.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d29o6dhb50c9jp', {
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

// sequelize.authenticate()
//     .then(() => console.log('Connection has been established successfully.'))
//     .catch(err => console.error('Unable to connect to the database:', err));


    

module.exports = sequelize;
