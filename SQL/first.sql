-- 查询users表中所有数据
-- select * from my_db_01.users

-- 查询username列数据
-- select username from my_db_01.users

-- 查询多列数据 列用逗号分隔
-- select username,password from my_db_01.users

-- distinct 查询去重
-- select distinct password from my_db_01.users

-- WHERE语句 =等于  <>不等于  >=大于等于 <=小于等于     >大于   <小于  between 在某个范围内    like 搜索某种模式  
-- select * from my_db_01.users  where username = 'zs'

-- and or 与或
-- select * from my_db_01.users where status=0 and username = 'zs'
-- select * from my_db_01.users where username = 'zs' or password = 'ls123'


-- 新增
-- insert into  my_db_01.users (username,password) values ('dp','dp123')


-- 修改 删除 修改都得用key column 
-- update my_db_01.users set username = 'dp1' where id=5


-- 删除  用username删除不了 因为不是key column
-- delete from my_db_01.users where id=2
