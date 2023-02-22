# filters  过滤器
{{message | capitalize}}


filters:{
    <!-- 默认接受message作为第一个参数 -->
    capitalize(value){
           
    }
}



# 可串联
{{message | filterA | filterB}}

filterA接受message为参数
filterB接受filterA过滤后的结果为参数



# 可传参
{{message | filterA(arg1,arg2)}}

filters:{
    <!-- 默认接受message作为第一个参数,arg1,arg2为第2与第三个参数 -->
    filterA(value,arg1,arg2){
           
    }
}