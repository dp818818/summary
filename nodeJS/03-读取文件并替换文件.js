const fs = require('fs');
fs.readFile('./file/data.txt','utf-8',function(err,dataStr){
    if(err){
        return console.log('读取文件失败！') 
    }
    let oldArr = dataStr.split(' ');
    let newArr = oldArr.map(item=>{
        return item.replace(/=/g,':')
    })
    //join 给数组的每项都添加
    let newStr = newArr.join('\n')
    fs.writeFile('./file/data2.txt',newStr,'utf-8',function(err,dataStr){
        if(err){
            return console.log('创建文件失败'+err)
        }
        console.log('创建文件成功')
    })
})