const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

module.exports = (sequelize, Sequelize) => {

    const DepartmentModel = sequelize.define('department', {

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM('Tech', 'Non-Tech'),
            allowNull: false
        }
    })
    return DepartmentModel;
}