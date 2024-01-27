const jwt =require('jsonwebtoken')

require('dotenv').config();

exports.auth = (req ,res ,next) => {
    try{
        //extract JWT token
        //PENDING : other way to fetch token

        console.log("cookie : " , req.cookies.token)
        console.log("body :" , req.body.token)
        // console.log("header" , req.header("Authorization"))

        const token =req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer","");

        if(!token){
            return res.status(401).json({
                success:false,
                message:'Token missing',
            })
        }

        //verify the token
        try{
            const decode=jwt.verify(token ,process.env.JWT_SECRET)
            console.log(decode)

            req.user = decode;
        }
        catch(error){
            return res.status(401).json({
                success:false,
                message:'token is invalid',
            });
        }
        next()

    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:'something went wrong'
        })

    }
}

exports.isStudent = (req , res ,next) =>{
    try{
        if(req.user.role!=="Student"){
            return res.status(401).json({
                success:false,
                message:'this is a protected route for student '
            })
        }
        next()
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:'something went wrong'
        })
    }
}

exports.isAdmin = (req , res ,next) =>{
    try{
        if(req.user.role!=="Admin"){
            return res.status(401).json({
                success:false,
                message:'this is a protected route for admin '
            })
        }
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:'something went wrong'
        })
    }
}