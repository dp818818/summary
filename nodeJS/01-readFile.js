const fs = require('fs')
//参数1：文件路径
//参数2：非必填 文件格式
//参数3：回调操作

fs.readFile('./file/123.txt','utf-8',function(err,dataStr){
   if(err){
    return  console.log('读取文件失败！' + err)
   }
   console.log(dataStr)  //1234567890
})

