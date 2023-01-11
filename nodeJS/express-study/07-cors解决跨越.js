const express = require('express');

const app = express();

// 此时会产生跨域
// app.get('/info',(req,res)=>{
//     res.send('info')
// })  

// Access-Control-Allow-Origin   CORS解决跨域问题
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');  //*通配  表示任意ip都可访问此接口
    next()  
})

app.get('/info',(req,res)=>{
    res.send('info')
}) 

app.listen(8000,()=>{
    console.log('server start at http://localhost:8000')
})