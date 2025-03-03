const mongoose = require('mongoose')
const connectionToDB = mongoose.connect('mongodb://127.0.0.1:27017/')
module.exports = connectionToDB