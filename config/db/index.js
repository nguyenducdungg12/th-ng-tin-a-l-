const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('u705797778_HTT3C', 'u705797778_vanhung0206', 'Hung0327712600', {
    host: '156.67.222.169',
    dialect: 'mysql'
});

module.exports=sequelize;