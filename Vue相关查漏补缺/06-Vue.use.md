# Vue.use()   插件

Vue.use(MyPlugin,{someOptions:true})


<!-- Vue.use(MyPlugin)方法执行时，会自动执行MyPlugin中的install方法，并且默认传递一个Vue实例 -->
class MyPlugin{
    install(Vue,options){
      
    }
}