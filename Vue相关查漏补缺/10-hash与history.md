# hash路由
  hashchange事件实现路由切换
# history路由
  pushState与replaceState切换url事件路由切换，
  刷新页面时，一定会向后端发起请求，但是后端匹配不到路径资源，会返回404
  需要nginx进行静态资源代理，重定向到 /index.html ,因为前端资源都在index.html下
（在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。）