const fs = require('fs');


// 参数1：文件路径名称
// 参数2：文件内容
// 参数3：文件格式  非必选
// 参数4：文件操作回调
fs.writeFile('./file/02.text', 'hello!', 'utf-8', function (err, dataStr) {
    if (err) {
       return console.log('文件创建失败'+err);
    }
    console.log(dataStr);   //undefined   
})

//文件创建成功