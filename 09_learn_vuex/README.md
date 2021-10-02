## vueX  
1. 多个组件依赖于同一状态
2. 不同视图的行为需要变更同一状态
actions -> state -> view -> actions -> 

1. state
2. actions <-> backend API
3. mutations  不允许有异步操作，通过actions 实现

## 单一状态树
1. 用一个对象包含了全部应用级别的状态
2. Single Source of Truth  SSOT 单一数据源
3. 每个应用只有一个 store 实例
4. 单一状态树和模块化并不冲突，后续会讲到 module 的概念