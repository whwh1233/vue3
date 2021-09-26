<template>
  <div class="app">
    <button @click="toggle">显示/隐藏</button>
    <!-- 给了name  就会根据动画自己加 class -->
    <!-- 但是也可以自定义class 的名称  -->
    <!-- 自定义的class 优先级更高 -->
    <transition enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__flipInY">
      <!-- <h2 v-if="isShow">Hello world</h2> -->
      <h2 v-if="isShow" class="title">文喝武喝233</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true
    }
  },

  methods: {
    toggle() {
      this.isShow = !this.isShow
      console.log(this.isShow)
    }
  }
}
</script>

<style scoped>
.title {
  display: inline-block;
}
.animate__flipInY {
  animation-direction: reverse;
}

/* .why-enter-active {
  animation: bounceInUp 1s;
}

.why-leave-active {
  animation: bounceInUp 1s reverse;
} */
</style>
