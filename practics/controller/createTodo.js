const crud=require('../models/crud')

exports.createTodo=async(req ,res)=>{
    try{
         //extrect title and description from requst body
         const {title,description}=req.body;
         //create a new todo obj and insert in db
         const response=await crud.create({title ,description})
         //send response for successgul
         res.status(200).json(
            {
                success:true,
                data:response,
                message: 'entry created succesfully'
            }
         )
    }  
    catch(err){
        console.log(err)
        res.status(500)
        .json({
            success:false,
            data:"internet servre error",
            message:err.message,
        })

    }
}