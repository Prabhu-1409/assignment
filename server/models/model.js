const mongoose = require('mongoose')

const user_schema = mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
})

const employy_details = mongoose.Schema({
    empid:Number,
    name:String,
    dob:Date,
    role:String
})

const user = mongoose.model('logins',user_schema)
const employ_model = mongoose.model('user_details',employy_details)

module.exports = {user,employ_model}