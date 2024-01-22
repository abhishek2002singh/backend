//import models
const Post = require('../models/postModel')
const Like =require('../models/likeModel');

//like a post

exports.likesPost = async(req , res)=>{
    try{

        const {post , user}=req.body;

        const like= new Like({
            post ,user,
        });

        const savedLike = await like.save();

        //update post collection

        const updatePost = await Post.findByIdAndUpdate(post ,{$push: {likes : savedLike._id} } , {new :true})
               .populate('likes').exec()

        res.json({
            post:updatePost,
        })

    }
    catch{

        return res.status(500).json({
            error :" error while creating comment"
        })

    }
}

exports.unlikePost = async(req,res)=>{
    try{

        const {post ,like}=req.body;

        //find and like the collection

        const deleteLike = await Like.findByIdAndDelete({post:post , _id:like})

        //update post collection

        const updatepost = await Post.findByIdAndUpdate(post,{$pull: {likes: deleteLike._id}} , {new:true})

        res.json({
            post:updatepost
        })

    }
    catch{
        return res.status(500).json({
            error :" error while creating comment"
        })

    }
}



exports.likeController=(req ,res)=>{
    res.send("hi he is dommu page")
}