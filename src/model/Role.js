const Sequelize = require('sequelize')
const sequelize = require('./database')

const Role = sequelize.define('role', {
    role: Sequelize.STRING
},
{
    // remove createAt 
    timestamp: false
})

module.exports = Role
