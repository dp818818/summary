# MVVM思想

MVVM是Model-View-ViewModel的缩写，Model是数据，View是视图，ViewModel是视图模型（Vue实例对象）。
MVVM最核心的是ViewModel，ViewModel包含 DOM Listeners 和 Data Bindings。
DOM Listeners：实现了页面与数据的绑定，当页面操作数据时，DOM与Model也会作出对应变化
Data Bindings: 实现了数据与页面的绑定，当数据发送变化，页面也会对应渲染



# MVVM 与 MVC
MVVM实现了双向数据绑定，MVC中Model与View绑定是单向的。
MVVM实现了页面逻辑与视图的解耦，也实现了数据与视图的解耦，方便组件化开发。
