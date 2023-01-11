const fs = require('fs');

const path = require('path');

// __dirname 当前文件路径
console.log(__dirname);

// 拼接路径  ../表示上一级 
const p = path.join('/a','/b','/c','/d','../','/e');
// console.log(p);  //\a\b\c\e   

fs.readFile(path.join(__dirname,'./file/03.txt'),'utf-8',function(err,dataStr){
    if(err){
        return console.log('文件读取失败！')
    }
    console.log('文件读取成功！')
})


