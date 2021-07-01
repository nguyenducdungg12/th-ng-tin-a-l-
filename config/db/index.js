const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('u705797778_HTT3C', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

module.exports=sequelize;
