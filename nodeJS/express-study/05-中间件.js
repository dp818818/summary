//全局中间件和局部中间件
//全局中间件要放在路由之前注册
// 错误捕获中间件放在路由最后
//中间件上的req,res是共享的，中间件需要next()

const express = require('express');
const app = express();

// 定义全部中间件
const gmw = function(req,res,next){
    console.log('全局的中间件！');
    next();
}

// 定义局部中间件
const mw = function(req,res,next){
    console.log('局部中间件！')
    next();
}

// 使用全局中间件
app.use(gmw);

app.get('/user',(req,res)=>{
   res.send('获取user成功！')
})


// 使用局部中间件
app.post('/user',mw,(req,res)=>{
   res.send('修改user成功！')
})

app.post('/user2',(req,res)=>{
    throw new Error('错误！');
})

// 错误捕获中间件
app.use(function(err,req,res,next){
   res.send( 'error' + err.message)
})

app.listen(8000,function(){
    console.log('server start at http://localhost:8000')
})
