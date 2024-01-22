const mongoose =require('mongoose');

require('dotenv').config();

const dbBlogConnect= ()=>{
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(()=>console.log("ho gya re baba"))
    .catch((err)=>{
        console.log(err)
        console.log(err.message)
        process.exit(1);
    })
}

module.exports=dbBlogConnect