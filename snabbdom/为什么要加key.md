了解了虚拟dom，就知道了key的重要性！key是Vue的虚拟dom进行diff时非常关键的一个属性，在patch时的很多个环节都是用节点tagName与key来判断两个节点是否是一个节点，比如：

<div key='a'  id='aa'></div>  与  <div key='a'  id='aa'></div> 

转换为虚拟dom都为：

{
    sel:'div', //节点名称，一般命名为tag,命名无所谓，我们这是命名为sel
    data:{     //节点上的属性，如id,props等
        key:'a',
        id:'aa'
    },
    key:'a',
    text:undefined , //节点的文本
    elm: <div key='a'></div> //节点的真实dom
    children:[],  //节点的子节点
}

然后再patch的时候,  认为这两个虚拟dom的tagName与key是一样的，就不会去更新这个节点了，当节点的位置改变了的时候，最多移动下节点位置（当然，如果这两个节点都有子节点的时候，也需要比对它们的子节点） 。

具体的diff算法，可以看看这篇文章：


假如我们改变一下key:

旧：<div key='a'  id='aa'></div>  与  新：<div key='b'  id='aa'></div> 

此时，虚拟节点diff的时候，会认为这两个节点不是同一个节点，因为它们的 key 不一样，就会把旧节点删除，创建新节点并替换成新的节点。



思考一下，为什么不能用index当作key呢？

因为数组的index不是固定的，比如 list = [1,2,3,4,5,6,7,8,9,10] ,10个dom是以index作为key的,对应 key: 0`9 ，当list.unshift(0)  list就变为 [0,1,2,3,4,5,6,7,8,9,10],1-10的key都变了，就要重新创建1-10的dom，假如数据更多呢，就会造成很大的性能浪费且渲染慢。然而当1-10的key是唯一不变的，更改list并不会改变1-10的key,就不用重新创建1-10了，直接创建0，插入到list中，节省了很大的性能且渲染的更快。


Vue中key的作用以及为什么不能用index做为key