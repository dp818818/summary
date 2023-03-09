const mysql = require('mysql');

// createConnection方法创建连接对象
const connection = mysql.createConnection({
   host:'127.0.0.1',     //链接主机ip
   port:3306,            //端口
   user:'root',          //账号
   password:'admin123',  //密码
   database:'my_db_01'   //数据库名称
})

// 建立链接
connection.connect(function(err){
   if(err) return console.log('链接失败');
   console.log('链接成功')
})

