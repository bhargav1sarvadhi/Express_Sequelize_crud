const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

module.exports = (sequelize, Sequelize) => {

    const designationModel = sequelize.define('desination', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return designationModel
}