const express = require('express');

const app = express();


const router = require('./04-Router.js');

// 使用router
app.use(router)

app.listen(8000,function(){
    console.log('server start at http://localhost:8000')
})
