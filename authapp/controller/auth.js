const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User =require('../models/usermod')
require('dotenv').config()

exports.signup = async (req , res) =>{
    try{

        //get data
        const {name , email , password , role} =req.body;
        //check if user already exist

        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'user already exist '
            })
        }

        //secure password
        let hashedPassword;
        try
        {
            hashedPassword=await bcrypt.hash(password ,10);
        }
        catch(err) {
              return res.status(500).json({
                success:false,
                message:'error in hashing password time'
              })
        }

        //create entry for user
        const user =await User.create({
            name,email,password:hashedPassword,role
        })

        //set response for submination
        return res.status(200).json({
            success:true,
            message:'user created successfully'
        })

    }
    catch(error){
         console.error(error)
         return res.status(500).json({
            success:false,
            message:'throw error please try again'
         })
    }
}

//log in 

exports.login = async(req , res)=>{
    try{

        //data fetch
        const {email ,password }=req.body;

        //validation of email and password
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:'please fill all details carefully'
            })
        }

        //check for register user
        let user = await User.findOne({email})
        //if not a register user
        if(!user){
            return res.status(401).json({
                success:true,
                message:'user is not register'
            })
        }

        const payload = {
            email:user.email,
            id:user._id,
            role:user.role,
        }
        
        //verify password and generate a jwt tokens
        if(await bcrypt.compare(password,user.password)){
          
            //password match ho gya
            let token=jwt.sign(payload ,
                                 process.env.JWT_SECRET,{
                                    expiresIn:"2h",
                                 })
            user=user.toObject()                     
            user.token = token;
            user.password = undefined;

            //create cookie

            const options = {
                  expires: new Date(Date.now() +3 * 24 * 60 *60 * 1000),
                  httpOnly:true,
            }

            res.cookie("abhisheksingh", token,options ).status(200).json({
                success:true,
                token,
                user,
                message:'user is login successfully'
            })
        }
        else{
            //password not match
            res.status(403).json({
               success:false,
               message:'password not currect fill again'
            })
        }

    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'logiin failed'
        })

    }
}