const mongoose = require('mongoose');
// const Schema = mongoose.Schema
const userSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    num1:{type: Number},
    num2:{type:Number}
})

// const userSchema ={
//     fname:String,
//     lname:String,
//     number1:{type: Number},
//     number2:{type:Number}
    
// }
const User = mongoose.model("User",userSchema)
module.exports = User