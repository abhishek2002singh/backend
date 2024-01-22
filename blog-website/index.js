const express = require('express')

const app=express();

require('dotenv').config();

const PORT = process.env.PORT || 3000;
// const bodyParser=require('body-Parser')


// app.use(bodyParser.json())

//middleware
app.use(express.json());

const blog = require('./routes/blog')

//mount
app.use('/api/v1' ,blog);

const connectwithdb= require('./config/database')
connectwithdb();

//start the server
app.listen(PORT , () =>{
    console.log('app was started')
})

app.get('/' , (req , res)=>{
    res.send(`<h1>this is my home page baby</h1>`)
})