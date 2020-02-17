const express = require('express')
const app = express()

app.set('port', process.env.PORT || 3000)

app.use(express.json())

const employeeRouter = require('./routes/EmployeeRoute')

app.use('/employee', employeeRouter)

app.use('/', (req, res) => {
    res.send('Hello World')
})

app.listen(app.get('port'), () => {
    console.log('start server')
})