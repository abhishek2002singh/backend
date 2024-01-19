const Todo=require('../models/Todo')

exports.deleteTodo= async(req ,res)=>{
    try{
       const id=req.params.id;

       await Todo.findByIdAndDelete(id)
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