const controllers = {}

const sequelize = require('../model/database')
const Employee = require('../model/Employee')
const Role = require('../model/Role')

sequelize.sync()

controllers.list = async (req, res) => {
    const data = await Employee.findAll({
        include: [Role]
    })
        .then(data => {
            return data
        })
        .catch(err => {
            return err
        })

    res.status(200).json({ success: true, data: data })
}

controllers.create = async (req, res) => {
    // data
    const { name, email, address, phone, role } = req.body
    // create
    const data = await Employee.create({
        name: name,
        email: email,
        address: address,
        phone: phone,
        roleId: role
    })
        .then(function(data) {
            return data
        })
        .catch(error => {
            console.log('Errorazo ' + error)
            return error
        })
    // return res
    res.status(200).json({
        success: true,
        message: 'create employee',
        data: data
    })
}

controllers.update = async (req, res) => {
    const { id } = req.params

    const { name, email, address, phone, role } = req.body

    const data = await Employee.update(
        {
            name: name,
            email: email,
            address: address,
            phone: phone,
            roleId: role
        },
        {
            where: { id: id }
        }
    )
        .then(data => {
            return data
        })
        .catch(error => {
            return error
        })
    res.status(200).json({
        success: true,
        data: data,
        message: 'Updated successful'
    })
}

controllers.delete = async (req, res) => {
    // parameter post
    const { id } = req.body
    // delete sequelize
    const del = await Employee.destroy({
        where: { id: id }
    })
    res.json({ success: true, deleted: del, message: 'Deleted successful' })
}

// controllers.testdata = async (req, res) => {
//     const response =  await sequelize.sync().then(() => {

//         Role.create({
//             role: 'admin'
//         })

//         Employee.create({
//             name: 'admin1',
//             email: 'admin@example.com',
//             address: 'bangkok',
//             phone: '1234567890',
//             roleId: 1
//         })

//         const data = Employee.findAll()
//         return data
//     })
//     .catch(err => {
//         return err
//     })

//     res.json({status: true, data: response})
// }

// controllers.test = (req, res) => {
//     const data = {
//         name: 'John Smith',
//         age: 24,
//         city: 'Madrid'
//     }

//     res.json(data)
// }

module.exports = controllers
