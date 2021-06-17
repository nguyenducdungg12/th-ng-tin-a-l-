const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('./../config/db');
const DataAnalytisModel = sequelize.define('City', {
    // Model attributes are defined here
    IDData: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    IDR: { type: DataTypes.INTEGER },
    Name: { type: DataTypes.STRING },
    FYear: { type: DataTypes.INTEGER },
    CDesc: { type: DataTypes.STRING },
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = DataAnalytisModel;