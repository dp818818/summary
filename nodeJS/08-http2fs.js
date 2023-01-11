const fs = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer();


//根据浏览器请求的路径返回文件内容
server.on('request', function (req, res) {
    let url =  req.url == '' || req.url == '/'  ? '/test.html'  :  req.url;

    fs.readFile(path.join(__dirname,'./file',url), (err, dataStr) => {
        if (err) {
            return res.end('404 NTO FIND');
        };
        res.end(dataStr);
    })
})

server.listen(8000, function () {
    console.log('start at localhost:8000')
})
