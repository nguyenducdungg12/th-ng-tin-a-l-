const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('./../config/db');
const CityYearPolygon = require('./CityYearPolygon');
const DataAnalytisModel = sequelize.define('Data_Analytis', {
    // Model attributes are defined here
    IDData: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    AVGAcr: { type: DataTypes.INTEGER },
    DPop: { type: DataTypes.STRING },
    llcreate: { type: DataTypes.INTEGER },
    IDPo: { type: DataTypes.INTEGER },
}, {
    freezeTableName: true,
    timestamps: false
});
module.exports = DataAnalytisModel;