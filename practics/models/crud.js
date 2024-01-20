const mongoose=require('mongoose')

const crudSchema = new mongoose.Schema(  {
    title:{
        type:String,
        required:true,
        maxLength:50,
    },
    description:{
        type:String,
        required:true,
        maxLength:50,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },
})

module.exports=mongoose.model('Crud' ,crudSchema)