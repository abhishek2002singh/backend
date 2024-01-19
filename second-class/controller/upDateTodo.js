const Todo=require('../models/Todo')


exports.upDateTodo= async(req , res)=>{
    try{
         const id=req.params.id;

    const {title ,description}=req.body;
    const todo=await Todo.findByIdAndUpdate(
        {_id :id},
        {title,description,updatedAt:Date.now()}
  
    )
    res.status(200)
          .json({
            success:true,
            data:todo,
            message:'updates todo data is successfully',
          })

   }
   catch(err){
    console.log(err)
    res.status(500)
    .json({
        success:false,
        data:"internet server error",
        message:err.message,
    })
}
   
}