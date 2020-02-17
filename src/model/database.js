const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'react-mysql', // database
    'root', // username
    'root', // password
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

module.exports = sequelize