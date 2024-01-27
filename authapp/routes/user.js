const express =require('express')

const router= express.Router();

const {login , signup}=require('../controller/auth')
const {auth ,isStudent , isAdmin} =require('../middleware/Auth')

//protected route

router.get('/auth' , auth , (req , res)=>{
    res.status(200).json({
        success:true,
        message:'auth work successuflly'
    })
})

router.get('/student' , auth , isStudent, (req , res)=>{
    res.status(200).json({
        success:true,
        message:'you are loged in student page successufully'
    })
})

router.get('/admin' , auth , isAdmin ,(req ,res )=>{
    res.status(200).json({
        success:true,
        message:'you are loged in admin page successufully'
    })
})

router.post('/login' , login)

router.post('/signup' , signup)

module.exports=router