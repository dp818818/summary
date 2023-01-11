/*
  basename()  参数一：文件路径  返回最后一级     参数二（可选）：文件后缀   返回文件去除后缀的最后一级
  extname()   参数一：文件路径  返回文件后缀
 */

const path = require('path');

const a = '/a/b/c/d.index.html'
const b = path.basename(a);
// console.log(b) //d.index.html


const b2 = path.basename(a, '.index.html')
// console.log(b2);  //d

const p = '/a/c/d/e.js'
const p1 = path.extname(p);
console.log(p1);  //.js