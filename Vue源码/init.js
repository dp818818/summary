// 初始化操作
export default function initMixin(Vue) {
    Vue.prototype._init = function (options) {
        const vm = this;

        // this.$options = mergeOptions(...)  这是一些options合并操作 列如生命周期合并 暂时不讲

        vm._self = vm;
        initLifecycle(vm) //初始化生命周期
        initEvents(vm) //初始化事件
        initRenfer(vm) //初始化渲染
        callHook(vm,'beforeCreate')  //初始化调用生命周期
        initInjections(vm) //初始化injections
        initState(vm) //初始化prop data computed watch methods 
        initProvide(vm) //初始化provide
        callHook(vm,'created') 
    }
}
