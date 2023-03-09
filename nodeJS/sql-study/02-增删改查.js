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




// 新增
// const sqladd = 'insert into users (username,password) values (?,?)'
// connection.query(sqladd,['二驴','el123'],function(err,result){
//     if(err) return console.log(err.message)
//     if(result.affectedRows === 1){
//        console.log('添加成功！')
//     }
// })


//新增  参数自动
// const sqladd2 = 'insert into users set ?'
// const user = {username:'彪子',password:'bz123'}

// connection.query(sqladd2,user,function(err,result){
//     if(err) return console.log(err.message)
//     if(result.affectedRows === 1){
//        console.log('添加成功！')
//     }
// })


// 删除 一个参数可以省略[]
// const seqDel = 'delete from users where id=?'
// connection.query(seqDel,8,function(err,result){
//    if(err){return err.message}
//    if(result.affectedRows === 1){
//       console.log('删除成功！')
//    }
// })


// 改
const sqlup = 'update users set password=? where id=?'
connection.query(sqlup,['el4321',7],function(err,result){
   if(err){return console.log(err.message)}
   if(result.affectedRows === 1){
       console.log('更改成功')
   }
})


// 查询
const sql1 = 'select * from users'
connection.query(sql1,function(err,result){
    if(err){return console.log(err.message)}
    console.log(result) 
})

// 断开链接
connection.end();