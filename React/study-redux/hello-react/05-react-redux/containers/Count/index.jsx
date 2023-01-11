 /*
   react-redux:
   UI组件外面需要套一个容器组件 通过props交流传递信息
   容器组件与redux直接交流信息
 */

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux';
// 引入UI组件
import CountUI from '../../components/Count';
// 引入actions
import { INCREMENTACTION, DECREMENTACTION, ASYNCACTION } from '../../redux/count_action';


/**
 * 1.mapStateToProps用于给UI组件传递状态
 * 2.mapStateToProps返回一个对象
 * 3.mapStateToProps返回一个对象的key,作为UI组件props的key,value为UI组件props的value
 * 4. connect里别人帮你调用了，state是参数
 */

function mapStateToProps(state){
   return{
     count:state
   }
}

/**
    1.mapDispatchToProps用于给组件传递方法
    2.mapStateToProps返回一个对象
    3.mapStateToProps返回一个对象的key,作为UI组件props的key,value为UI组件props的value
    4. connect里别人帮你调用了，dispatch是参数 
 */

function mapDispatchToProps(dispatch){
   return{
       jia:number =>dispatch(INCREMENTACTION(number)),
       jian:number =>dispatch(DECREMENTACTION(number)),
       jiaAsync:(number,time) =>dispatch(ASYNCACTION(number,time))
   }
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI);