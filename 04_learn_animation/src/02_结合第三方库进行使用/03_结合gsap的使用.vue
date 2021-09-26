<template>
  <div class="app">
    <button @click="toggle">显示/隐藏</button>

    <!-- 提供了很多js的钩子  -->
    <transition  @enter="enter"
                @leave="leave" :css="false">
                <!-- :css 就是要跳过css检测，性能可以更高，避免css的影响 -->
      <h2 v-if="isShow" class="title">whwh1233</h2>
    </transition>
  </div>
</template>

<script>
import gsap from 'gsap'
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
    },
    enter(el,done) {
      console.log('enter')
      gsap.from(el,{
        scale:0,
        x:200,// x:this.distance
        rotation:360,
        onComplete:done
      })
    },
    
    leave(el,done) {
      console.log('leave')
      gsap.from(el,{
        scale:0,
        x:-200,// x:this.distance
        rotation:360,
        onComplete:done
      })
    },
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
