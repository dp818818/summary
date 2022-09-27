import patchVnode from './patchVnode.js';
import createElement from './createElement.js';

// 判断是否是同一个虚拟节点
function sameVnode(a, b) {
    return a.sel == b.sel && a.key == b.key;
};

export default function updateChildren(oldVnode, newVnode) {
    //移动是指在真实dom中移动  虚拟dom数组是不变的  新旧都不变  
    //旧虚拟节的elm,也是旧虚拟节点children 的父节点
    let parentElm = oldVnode.elm;
    //新虚拟节点的子节点
    let newCh = newVnode.children;
    //旧虚拟节点的子节点
    let oldCh = oldVnode.children;
    //定义新旧虚拟节点的头部指针
    let newS = 0;
    let newSNode = newCh[newS];
    let oldS = 0;
    let oldSNode = oldCh[oldS];
    //定义新旧虚拟节点的尾部指针
    let newE = newCh.length - 1;
    let newENode = newCh[newE]
    let oldE = oldCh.length - 1;
    let oldENode = oldCh[oldE];

    // 开始比对 ，1 2 3 4 四种情况是新旧虚拟节点都存在的，只是顺序不一样
    //是前面判断两个一样的虚拟节点 也就是当新旧虚拟节点sel,key相等时
    //递归patchVnode(oldVnode,newVnode)    这里为什么要递归patchVnode呢？是因为子节点可能本身也有子节点，需要去diff一下，
    //并且patchVnode会把新旧虚拟节点变为真正的节点，插到其父节点上的！
    //1 2是不需要移动节点，  只要patchVnode变成真正的dom 插入到其父节点上
    //3 4 需要移动节点，也需要patchVnode变成真正的dom 插入到其父节点上
    //移动是真实dom移动，旧虚拟节点oldCh 不变，只是其前后指针变
    while (newS <= newE && oldS <= oldE) {
        // 后面会把部分节点置为null，直接跳过
        if (newSNode == null) {
            newSNode = newCh[++newS];
        } else if (newENode == null) {
            newENode = newCh[--newE];
        } else if (oldSNode == null) {
            oldSNode = oldCh[++oldS];
        } else if (oldENode == null) {
            oldENode = oldCh[--oldE];
        }
        else if (sameVnode(newSNode, oldSNode)) {
            //1.新前与旧前一样
            console.log('1.新前与旧前一样')
            //继续 patchVnode这两个虚拟节点
            patchVnode(oldSNode, newSNode);
            //新前与旧前指针下移  
            newSNode = newCh[++newS];
            oldSNode = oldCh[++oldS];
        } else if (sameVnode(newENode, oldENode)) {
            //2.新后与旧后一样
            console.log('2.新后与旧后一样')
            patchVnode(oldENode, newENode);
            //新后与旧后指针上移
            newENode = newCh[--newE];
            oldENode = oldCh[--oldE];
        } else if (sameVnode(newSNode, oldENode)) {
            //3.新前与旧后一样
            console.log('3.新前与旧后一样')
            patchVnode(oldENode, newSNode);
            //移动，要将旧后dom插入到旧前dom上（改变的是真实dom,旧children其实是没有变的，它是用了对比的），新前指针下移，旧后指针上移
            parentElm.insertBefore(oldENode.elm, oldSNode.elm)
            newSNode = newCh[++newS];
            oldENode = oldCh[--oldE];
        } else if (sameVnode(newENode, oldSNode)) {
            //4.新后与旧前一样  
            console.log('4.新后与旧前一样')
            patchVnode(oldSNode, newENode);
            //移动，将旧前dom插入到旧后，新后指针上移，旧前指针下移
            parentElm.insertBefore(oldSNode.elm, oldENode.elm)
            newENode = newCh[--newE];
            oldSNode = oldCh[++oldS];
        } else {
            //上面四种没有命中  看看新虚拟节点存不存在旧虚拟节点中
            //这里将oldCh的key 存在一个对象中，value值为它在oldCh中的索引  {key:index}
            let keyMap = {};
            for (let i = 0; i < oldCh.length; i++) {
                keyMap[oldCh[i].key] = i;
            };
            //看看新虚拟节点的key在不在keyMap中有
            const keyInOldCh = keyMap[newSNode.key];
            if (keyInOldCh) {
                //存在  oldToMove 与newSNode一样   移动到旧前
                let oldToMove = oldCh[keyInOldCh];
                patchVnode(oldToMove, newSNode);
                parentElm.insertBefore(oldToMove.elm, oldSNode.elm);
                //这里解释一下为什么，因为这个节点已经比对过了，后面不需要再去比对了
                oldCh[keyInOldCh] = null;
            } else {
                //不存在  是新增的节点 直接插入
                parentElm.insertBefore(createElement(newSNode), oldSNode.elm)
            }
            //只移动新的开始指针，因为我们刚用它去比对oldCh的
            newSNode = newCh[++newS];
        }
    }

    //判断有没有剩余  删除是删除真实dom上的节点  新增是新增在真实的dom上
    if (newS <= newE) {
        //新虚拟节点没有循环完毕  有新增
        for (let i = newS; i <= newE; i++) {
            //将虚拟节点变为真实dom,添加到节点上
            parentElm.appendChild(createElement(newCh[i]));
        }
    } else if (oldS <= oldE) {
        //旧虚拟节点没有循环完毕  要删除
        for (let i = oldS; i <= oldE; i++) {
            //删除子节点
            parentElm.removeChild(oldCh[i].elm);
        }
    }
};