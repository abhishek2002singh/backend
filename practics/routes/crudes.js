const express = require('express')

const router=express.Router()

//import controller
const {createTodo} = require('../controller/createTodo')
const {findCrud} = require('../controller/findCrud')

//define API routes

router.post('/createTodo',createTodo);
router.get('/findCrud',findCrud);

module.exports=router;