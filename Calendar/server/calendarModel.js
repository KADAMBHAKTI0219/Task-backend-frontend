const mongoose = require('mongoose')
const calendarSchema = mongoose.Schema({
    DateByNumber:String,
    DateByString:String
})
const CalendarModel = mongoose.model('Calendars',calendarSchema)
module.exports = CalendarModel