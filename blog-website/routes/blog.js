const express = require('express')

const router=express.Router()

//import controller

const {likeController , likesPost, unlikePost}=require('../controller/likeController')
const {CreateComment} = require('../controller/CommentController')
const { createPost, getAllPosts } = require('../controller/postcontroller')

router.get("/likeController" ,likeController)
router.post('/comments/create' ,CreateComment)
router.post('/posts/create',createPost)
router.get('/posts',getAllPosts)
router.post('/likes/like',likesPost)
router.post('/likes/unlike',unlikePost)

module.exports=router;