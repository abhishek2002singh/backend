const crud=require('../models/crud')

exports.findCrud=async(req ,res)=>{
    try{
        // fetch all todo items from database
        const todos=await crud.find({})

        //response
        res.status(200)
        .json({
          success:true,
          data:todos,
          message:'Entire todo data is successfully',
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