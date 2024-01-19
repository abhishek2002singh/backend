const express=require('express')
const router=express.Router();

//import controller
const {createTodo}=require('../controller/createTodo')
const {getTodo ,getTodoById}=require('../controller/getTodo')
const {upDateTodo} =require('../controller/upDateTodo')
const {deleteTodo} =require('../controller/deleteTodo')

//define API routes

router.post('/createTodo',createTodo);
router.get('/getTodos',getTodo);
router.get('/getTodos/:id',getTodoById)
router.put('/upDateTodo/:id',upDateTodo)
router.delete('/deleteTodo/:id',deleteTodo)

module.exports=router;