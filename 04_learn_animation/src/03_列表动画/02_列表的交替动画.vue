<template>
  <div>
    <input type="text" v-model="keyWord" >
    <transition-group tag="ul" name="why" :css="false"
      @before-enter="beforeEnter"
      @enter="enter" @leave="leave" >
      <li v-for="(e,i) in showNames" :key="e" :data-index="i">
        {{e}}
      </li>
    </transition-group>
   
  </div>  
</template>

<script>
import gsap from 'gsap'
export default {
  data() {
    return {
      names:['a','b','c','abc','ab','ac','bc'],
      keyWord:''
    }
  },
  methods:{
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter(el,done) {
      gsap.to(el,{
        opacity:1,
        height:'1.5em',
        delay:el.dataset.index * 0.5,
        onComplete:done
      })
    },
    leave(el,done) {
      gsap.to(el,{
        opacity:0,
        height:0,
        delay:el.dataset.index * 0.5,
        onComplete:done
      })
    }
  },
  computed:{
    showNames() {
      return this.names.filter(item => item.indexOf(this.keyWord) !== -1)
    }
  }
}
</script>

<style scoped>
  /* .why-enter-from,
  .why-leave-to {
    opacity: 0;
  }

  .why-leave-active,
  .why-enter-active {
    transition: opacity 1s ease;
  } */
</style>