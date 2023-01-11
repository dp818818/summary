const express = require('express');

const app = express();

// 内置组件express.json()  解析post传过来的json
app.use(express.json())
// 内置组件express.urlencoded 解析post传过来的 x-www-form-urlencoded
app.use(express.urlencoded({extended:false}))

app.post('/user',(req,res)=>{
   console.log(req.body)
   res.send('修改成功')
})


app.listen(8000,()=>{
    console.log('server start at http://localhost:8000')
})


// 第三方中间件 body-parser   express.urlencoded是基于body-parser封装的