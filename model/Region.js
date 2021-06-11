const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('./../config/db');
const City = require('./City')

const RegionModel = sequelize.define('Region', {
    // Model attributes are defined here
    IDR: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING},
    RDesc: { type: DataTypes.STRING},
    Location: { type: DataTypes.STRING },
}, {
    freezeTableName: true,
    timestamps: false
});
console.log(City);
module.exports = RegionModel;