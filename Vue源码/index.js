import initMixin from './init'

// 定义构造函数
function Vue (options) {
    if (process.env.NODE_ENV !== 'production' &&  !(this instanceof Vue)
    ) {
      warn('Vue is a constructor and should be called with the `new` keyword')
    }
    // 实例初始化操作
    this._init(options)
}


// 初始化init
initMixin(Vue)