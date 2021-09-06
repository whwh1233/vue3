<template>
  <div class="app">
    <button @click="toggle">显示/隐藏</button>
    <!-- 有了名字直接去写css -->
    <transition name="why" type="transition" :duration="{leave:800,enter:2200}">
      <h2 v-if="isShow" class="title">Hello world</h2>  
    </transition>
<!-- 当插入或删除 transition 中的元素时 -->
<!-- 在嗅探是否有对应的class ，那么会在恰当的时机添加/删除类名 -->
<!-- 如果transition 还使用了一些提供了的钩子函数，那么也会在恰当的时机执行 -->
<!-- 如果什么都没有，那么改变就会立即执行 -->
  
  </div>  
</template>

<script>
export default {
  data() {
    return {
      isShow:true
    }
  },
  methods:{
    toggle() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>
.app {

}
.title {
  width:200px;
  background: pink;
  margin: 0 auto;
  text-align: center;
}
/* v-enter-from定义进入过渡的开始状态，元素被插入之前生效，被插入的之后的下一帧被删除 添加v-enter-to的class*/
/* v-enter-active 定义进入过渡的状态，在整个过渡时间应用，被插入之前生效，动画完成后移除，可以定义时间，过程，延迟，曲线函数等 */
/* v-enter-to 定义过渡结束的状态，被插入的下一帧生效，过渡完成之后移除 */
/* v-leave-from */
/* v-leave-active */
/* v-leave-to */

  .why-enter-from,
  .why-leave-to {
    opacity: 0;
  }
  /* 默认值可以试着注释掉 */
  .why-enter-to,
  .why-leave-from {
    opacity: 1;
  }
  .why-enter-active {
    transition: opacity 2s ease;
    animation: bounce 2s ease;
  }
  .why-leave-active {
    transition: opacity 2s ease;

    animation: bounce 2s ease reverse;

  }
  @keyframes bounce {
    0% {
      transform: scale(0);
    }
    50%{
      transform: scale(1.2);
    }
    100%{
      transform: scale(1);
    }
  }
</style>