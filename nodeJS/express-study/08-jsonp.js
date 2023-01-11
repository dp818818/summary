const express = require('express');
const app = express();

// jsonp  只支持get
app.get('/list',(req,res)=>{
    // 获取客户端url上的函数
    const fn = req.query.cb;
    // 要传给客户端的json数据
    const data =  JSON.stringify({name:'dp'});
    // 拼接函数调用字符串并返回给客户端
    res.send(`${fn}(${data})`)
})

app.listen(8000,()=>{
    console.log('server start at http://localhost')
})