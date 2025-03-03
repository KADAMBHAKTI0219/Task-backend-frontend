const express = require('express');
const { getDate } = require('./calendarController');
const CalendarRouter = express.Router()
CalendarRouter.get('/get',getDate);

module.exports = CalendarRouter