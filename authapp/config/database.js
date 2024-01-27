const mongoose=require('mongoose');



const dbconnect = () =>{
    mongoose.connect(process.env.MONGODB_URL ,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("connction ho gya re baba"))
    .catch((err)=>{
        console.log(err)
        console.log(err.message)
        console.log("kuchh gdavad hai re baba connection me check karo re")
        process.exit(1)
    })
}

module.exports=dbconnect