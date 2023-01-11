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
        this.state = this.vm.$data;

        let { getters = {}, mutations = {}, actions = {} } = options;
        this.getters = getters;
        this.mutations = mutations;
        this.actions = actions;
    }

}

export default {
    Store,
    install
};