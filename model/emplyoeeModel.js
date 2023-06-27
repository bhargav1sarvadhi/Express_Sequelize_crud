const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');


module.exports = (sequelize, Sequelize) => {

    const employeeModel = sequelize.define('Employee', {

        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                min: 11
            }
        },
        phone_number: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique:true,
            validate: {
                len: [10]
            }
        }
    })
    return employeeModel
}