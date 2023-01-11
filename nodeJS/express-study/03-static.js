const express = require('express');

const app = express();

// app.use(express.static('public'))

// 也可以加一层虚拟路径
app.use('/public',express.static('public'))


app.listen(8000,function(){
    console.log('server start at http://localhost:8000')
})