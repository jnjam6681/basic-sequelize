const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/EmployeeController')

router.get('/list', EmployeeController.list)

router.post('/create', EmployeeController.create)

router.patch('/update/:id', EmployeeController.update)

router.delete('/delete', EmployeeController.delete)

// router.get('/datatest', EmployeeContoller.testdata)
// router.get('/test', EmployeeContoller.test)
// router.get('/save', (req, res) => {
//     res.json({
//         status: 'Employee saved'
//     })
// })

module.exports = router
