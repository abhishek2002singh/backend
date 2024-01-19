const Todo=require('../models/Todo')

// define route handler

exports.getTodo=async(req ,res)=>{
    try{
          // fetch all todo items from database
          const todos=await Todo.find({})

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

exports.getTodoById= async(req , res)=>{
    try{
        const id =req.params.id
         const todo=await Todo.findById({_id: id})

    //if given data is not found

    if(!todo){
        return res.status(404)
        .json({
            success: false,
            message: "no data is found",
        })
    }

    // data are given id found
    res.status(200)
    .json({
        success:true,
        data:todo,
        messege: `Todo ${id} data are successusfully fetched`
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