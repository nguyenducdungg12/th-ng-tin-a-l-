const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('./../config/db');
const CityYearPolygon = require('./CityYearPolygon');
const CityModel = sequelize.define('City', {
    // Model attributes are defined here
    IDC: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    IDR: { type: DataTypes.INTEGER },
    Name: { type: DataTypes.STRING },
    FYear: { type: DataTypes.INTEGER },
    CDesc: { type: DataTypes.STRING },
}, {
    freezeTableName: true,
    timestamps: false
});
CityModel.hasMany(CityYearPolygon,{foreignKey:"IDC"});
CityYearPolygon.belongsTo(CityModel,{foreignKey:"IDC"});
module.exports = CityModel;