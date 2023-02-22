# CSRF 跨站请求伪造


# 攻击方式
1.get类型CSRF,在网站img标签中构建请求，打开页面自动发送请求
2.post类型的CSRF,隐藏表单在页面打开时，自动发送请求
3.链接类CSRF,a标签利用herf发送请求，诱导用户点击


# 防御CSRF
1.同源检测，通过origin或referer判断请求的是否为允许访问站点
2.使用CSRF Token进行验证
3.对Cookie进行双重验证
4.在设置cookie时，设置samesite,限制cookie不能被第三方使用



其他：如iframe，或第三方库都会存在安全隐患