// const express=require('express')

// const app=express();

// // const bodyParser=require('body-Parser');
// const bodyParser=require('body-Parser')
// app.use(bodyParser.json())

 
// app.get('/',(req ,res) =>{
//     res.send("hii amabhishek singh")
// })

// app.listen(3000 , ()=>{
//     console.log("app is runnig from 3000 port")
// })

// app.post('/api/cars', (req ,res)=>{
//     const {name , brand , driverName , owner}=req.body;
//     console.log(name)
//     console.log(brand)
//     console.log(driverName)
//     console.log(owner)
//     res.send("submit successfully")
// })

const express=require('express')

const app=express()

const bodyParser=require('body-Parser')
app.use(bodyParser.json())

app.get( '/' ,(req , res)=>{
    res.send("hii am abhishek")
})

app.listen(3000 ,()=>{
    console.log('port no. 3000')
})

app.post('/api/login' , (req , res)=>{
      
    const {name , brand ,localName} =req.body;
    console.log(name)
    console.log(brand)
    console.log(localName)
    res.send("hii i am here")
})