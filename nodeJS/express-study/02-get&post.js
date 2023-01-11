const express = require('express');

const app = express();

app.get('/user',(req,res)=>{
    console.log(req.query);    // ?拼接在路劲后面的参数
    res.send({'zs':18})
})


app.get('/user/info/:sex',(req,res)=>{
    console.log(req.params);    // { sex: 'man' }   params是直接/value的  不用加？
    res.send({'ls':19})
})


app.post('/user',(req,res)=>{
    console.log(req.body)
    res.send('请求成功！')
})

app.listen(8000,()=>{
    console.log('start server at http://localhost:8000')
})