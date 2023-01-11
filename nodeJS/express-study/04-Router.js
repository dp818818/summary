const express = require('express');

const Router = express.Router();

Router.get('/list',(req,res)=>{
    res.send('list获取成功！')
})

Router.post('/list',(req,res)=>{
    res.send('list存储成功！') 
})


module.exports = Router;