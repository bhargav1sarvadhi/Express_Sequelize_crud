const { Sequelize } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT
});

// const checkConnection = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error.message);
//     }
// }
// checkConnection();

const db = { sequelize, Sequelize }

db.employees = require('../model/emplyoeeModel')(sequelize, Sequelize);
db.department = require('../model/departmentModel')(sequelize, Sequelize);
db.designation = require('../model/designationModel')(sequelize, Sequelize);



// db.sequelize.sync({force: false});
module.exports = db;