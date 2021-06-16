const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('./../config/db');

const CityYearPolygonModel = sequelize.define('City_Year_Polygon', {
    // Model attributes are defined here
    IDPo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    IDC: { type: DataTypes.INTEGER ,primaryKey:true},
    YEAR: { type: DataTypes.STRING },
    CityType: { type: DataTypes.INTEGER },
    Population: { type: DataTypes.INTEGER },
    Area: { type: DataTypes.FLOAT },
    Industry: { type: DataTypes.FLOAT },
    Location: { type: DataTypes.STRING },

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = CityYearPolygonModel;