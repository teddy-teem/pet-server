const express = require("express")
require("dotenv").config()
const router = require("./routes")


const app = express()
app.use(express.json())
app.use("/api",router)

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on ${process.env.PORT}...`)
})