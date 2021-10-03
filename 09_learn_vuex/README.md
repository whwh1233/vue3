## vueX  
1. 多个组件依赖于同一状态
2. 不同视图的行为需要变更同一状态
actions -> state -> view -> actions -> 

1. state
2. actions <-> backend API   网络请求可以不通过组件来完成，可以通过vuex来完成并保存
3. mutations  不允许有异步操作，通过actions 实现

## 单一状态树
1. 用一个对象包含了全部应用级别的状态
2. Single Source of Truth  SSOT 单一数据源
3. 每个应用只有一个 store 实例
4. 单一状态树和模块化并不冲突，后续会讲到 module 的概念

##  vueX的五大核心
1. state
2. getters
3. mutations
4. actions
5. modules

### action
action 提交的 mutation
而不是直接修改 state
可以包含任意异步操作
#### 有一个非常重要的参数 context
context 是一个和store 实例具有相同方法和属性的context对象
context.state  context.getters context.commit
对以后使用 module 可以再讲