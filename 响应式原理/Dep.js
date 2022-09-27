export default class Dep{
    constructor(){
       //存放依赖  subs是所有的依赖，什么是依赖，就是我们去监听的数据，可能会很多个，都存放在subs中
       this.subs = [];
    }
    //订阅添加
    addSubs(sub){
        this.subs.push(sub) 
    }
    //依赖添加
    depend(){
        //这里的Dep.target很难理解，到底是什么呢，Dep就是class Dep{} ，  Dep.target是Watcher{} 
        this.addSubs(Dep.target)
    }
    //通知Watch更新
    notice(){
        let subs = this.subs;
        //这个地方不定义l , i<subs.length 会死循环。
        let l = subs.length;

        for(let i=0;i<l;i++){
            //subs[i]就是Watcher{} 
            //循环通知Watch去更新，只有变了才会更新，这个是在Watch判断的
            subs[i].update();
        }   
    }
}