//ts编译是将ts转换为js,ts是js的超集，js在ts中都支持！
//安装  npm install -g typescript
//编译 tes xxx.ts  例如：tsc 数据类型.ts  会生成  数据类型.js
//声明变量用的是 : 而不是 =  , : 声明是声明类型，而不是赋值 ，= 是赋值
/**1.number string boolean 变量声明*/
// number string boolean 都是小写
var aa;
aa = 5;
// a = 'hello'  //只能赋值为number，赋值hello会打红色波浪线，提示:不能将类型“string”分配给类型“number”。
var b;
b = '你好！';
b = '再见！';
// b = 6; //不能将类型“number”分配给类型“string”。
var c;
c = true;
c = false;
// c = 7; //不能将类型“number”分配给类型“boolean”。
//ts可以声明同时赋值或直接赋值自动赋予类型
var d = 6;
var e = 6;
/**2.字面量声明 */
var a2;
// a2 = 3; //不能将类型“3”分配给类型“2”
/**3.函数声明 */
function a3(s1, s2) {
    return s1 + s2;
}
a3('你好！', '再见');
// a3('你好！',123)  //报错
function a32(s1, s2) {
    return 4;
    // return '4'; //报错 (s1:string,s2:string):number 定义了返回值是number，就不能返回string。
}
/**4.联合类型 */
var a4;
a4 = 4;
a4 = '4';
var a42;
a42 = 1;
a42 = 2;
// a42 = 3;  //不能将类型“3”分配给类型“2 | 1”。
/**5.组合类型 */
var a5; //无意义，根本没有即是string又是number的数据类型；
var a51;
a51 = { study: true, name: '前端' };
