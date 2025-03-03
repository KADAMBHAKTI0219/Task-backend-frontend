const express = require('express')
const connectionToDB = require('./db')
const CalendarRouter = require('./calendarRoutes')
const app = express()
app.use(express.json())
app.use('/calendar',CalendarRouter)
const port = 9090
app.listen(port,async()=>{
    try {
        await connectionToDB
        console.log(`server is running on port ${port}`)
    } catch (error) {
        console.log(error)
    }
})