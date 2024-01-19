const express=require('express')
const app=express();
require('dotenv').config();
const bodyParser=require('body-Parser')

const PORT=process.env.PORT ||8000;

app.use(bodyParser.json())

//import routes for todo

const todoRoutes=require('./routes/todos')


//default route

app.get('/', (req , res)=>{
    res.send("kamal yadav")
})
//mount the todo ASPI routes

app.use('/api/v1' , todoRoutes);


app.listen(PORT , () =>{
    console.log("hii am abhishek singh")
})

//connection

const dbconnection=require('./config/atabase')
dbconnection();

