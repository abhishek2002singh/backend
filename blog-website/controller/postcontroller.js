const Post = require('../models/postModel')
exports.createPost = async (req , res) =>{
    try{
          const {title,body}=req.body;

          const post = new Post({title,body})

          const savedPost = await post.save()

          res.json({
            post:savedPost,
          });

    }
    catch{
        return res.status(500).json({
            error :" error while creating comment"
        })

    }
}

exports.getAllPosts = async (req , res) =>{
    try{

        const posts = await Post.find()
        // .populate('likes').populate('comments').exec()

        res.json({
            posts,
        })

    }
    catch{

        return res.status(500).json({
            error :" error while creating comment"
        })

    }
}