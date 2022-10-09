const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://ICSI518Hw2:jj39D86_byWRsbE@cluster0.tov4bod.mongodb.net/ICSI518")
app.use("/",require("./routes/UserRoute"))
app.listen(3001,() =>{
 console.log("Server is running on port 3001")
})