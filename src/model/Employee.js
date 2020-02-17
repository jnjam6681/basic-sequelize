const Sequelize = require('sequelize')
const sequelize = require('./database')

const Role = require('./Role')

const Employee = sequelize.define('employee', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    address: Sequelize.STRING,
    phone: Sequelize.BIGINT,
    roleId: {
        type: Sequelize.INTEGER,
        // This is a reference to another model
        references: {
            model: Role,
            key: 'id'
        }
    }
})

Employee.belongsTo(Role)

module.exports = Employee
