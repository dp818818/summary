const http = require('http');

const server = http.createServer();

// 服务请求时调用  req客户端请求的信息   res响应信息
server.on('request',(req,res)=>{
    const url = req.url;
    let content = '404 NOT FIND'
    if(url == '/' || url == '/home'){
        content = '<h1>首页</h1>'
    }else if(url == '/about'){
        content = '<h1>关于我们</h1>'
    }
    // 设置响应头 charset=utf8  防止乱码
    res.setHeader('Content-type','text/html; charset=utf8')
    // 结束请求 返回信息
    res.end(content); 
})


// 服务启动执行  端口为8000
server.listen(8000,()=>{
    console.log(`server runing at localhost:8000`)
})