const CalendarModel = require("./calendarModel")

const getDate = async(req,res)=>{
   try {
    await CalendarModel.find()
    return res.status(200).json({message: 'DateByNumber',})
   } catch (error){
        return res.status(400).json({message: 'Invalid DateByNumber', error: error})
   }
}
module.exports = {getDate}