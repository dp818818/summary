import Vuex from './vuex';
import Vue from 'vue';


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {},
    state: {
        age: 18
    },
    getters: {
        age(state){
           return state.age
        }
    },
    mutations: {
        setAge(state,payload){
            state.age = state.age + payload
        }
    },
    // actions 只是一个架构，  最终都是通过mutations来修改状态的 ，每个mutation执行完毕之后，可以得到对应的状态， devtools可以追踪每个状态变化
    actions: {
        delayAge({commit},payload){
            setTimeout(()=>{commit('setAge',payload)},2000)
        } 
    }
})

export default store;
