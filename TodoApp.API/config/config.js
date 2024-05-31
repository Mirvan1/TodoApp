const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('ToDoDB', 'postgres', '12345', {
//     host: 'localhost',
//     dialect: 'postgres',
//     logging: false, 
//     port:5432,
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// });


const sequelize = new Sequelize('postgres://uc1kpf4aju7shh:p4988210d048d7703bd8db8e3b107a09c0fff074e8196bde6879eba770d03f72f@cat670aihdrkt1.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d29o6dhb50c9jp', {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false  
        }
    },
    logging: true 
});



module.exports = sequelize;
