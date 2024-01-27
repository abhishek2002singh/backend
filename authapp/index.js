const express =require('express')

const app=express();

require('dotenv').config();



const PORT=process.env.PORT ||4000


//import cookieParser
const cookieParser=require('cookie-parser')
app.use(cookieParser())
//middleware

app.use(express.json())

const dbconnection=require('./config/database')
dbconnection()

//route import and mount

const user = require('./routes/user')

app.use('/api/v1' , user)

//activation server

app.listen(PORT , () =>{
    console.log('app is running from ${PORT}')
})