/*
 这是我们自己写的vuex.js
 */

let Vue;
// Vue.use()时，就会传过了一个Vue
const install = (vue) => {
    Vue = vue;
    // 将store放到每个组件上
    Vue.mixin({
        beforeCreate() {
            // 判断options上有没有store  没有直接找父级   因为根组件，我们会手动传store  可以看main.js  
            if (this.$options.store) {
                this.$store = this.$options.store
            } else {
                this.$store = this.$parent && this.$parent.$store
            }
        }
    })
}


class Store {
    constructor(options) {
        //state 将state变为响应式
        this.vm = new Vue({
            data: options.state
        })
        // this.vm.$data上就是Vue中data定义的数据，都是响应式的
        this.state = this.vm.$data;
        // 定义getters，mutations，actions 并默认为{}
        let { getters = {},mutations = {},actions = {} } = options;
        // 实现getters
        this.getters = {};
        // 注意this指向问题
        let _this = this;
        //Object.keys能打对象中的key遍历成数组，通过每个key，能找到对应的getter, getters[getterName]
        Object.keys(getters).forEach(getterName => {
            Object.defineProperty(this.getters, getterName, {
                get() {
                    return getters[getterName](_this.state)   // age(state){}
                }
            })
        })
        // 实现mutations 通过commit触发
        this.mutations = {}
        Object.keys(mutations).forEach(mutationName=>{
            this.mutations[mutationName] = function(payload){
                mutations[mutationName](_this.state,payload)  //setAge(state,payload){}
            }
        })
        //实现actions 通过dispatch触发
        this.actions = {}
        Object.keys(actions).forEach(actionName=>{
            this.actions[actionName] = function(payload){
                //_this就是store哦
                actions[actionName](_this,payload)   //delayAge(store,payload)
            }
        })  
    }
    commit(mutationName,payload){  //commit('setAge',1)
        this.mutations[mutationName](payload)  
    }
    dispatch(actionName,payload){
        this.actions[actionName](payload)
    } 
}

export default {
    Store,
    install
};