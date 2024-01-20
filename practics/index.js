const express = require('express')
require('dotenv').config();
const PORT = process.env.PORT || 4000
const app = express()

 const bodyParser=require('body-Parser')


 app.use(bodyParser.json())


//import routes for todo

const crudesRoutes=require('./routes/crudes')

app.get('/' ,(req , res)=>{
    res.send("<h1>kaisi ho baby</h1>")
})

//mount the todo ASPI routes

app.use('/api/v1' , crudesRoutes);

app.listen(PORT ,()=>{
    console.log(`website are running in port no.  ${PORT} `)
})


//connection

const dbconnection=require('./config/database')
dbconnection();