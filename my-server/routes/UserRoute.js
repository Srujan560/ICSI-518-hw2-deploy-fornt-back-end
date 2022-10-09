const express = require("express")
const router = express.Router()
const User = require("../models/UserModel")
// UserFirst,UserLast,UserNumber, UserNumber2
router.route("/create").post((req,res)=>{
    const fname=req.body.UserFirst
    const lname = req.body.UserLast
    const num1 = req.body.UserNumber
    const num2= req.body.UserNumber2
    const newUser =new User({
        fname,lname,num1,num2
    })
    newUser.save()
})
router.route("/users").get((req,res)=>{
    User.find().then(
        foundUsers=>res.json(foundUsers)
    )
})

module.exports = router