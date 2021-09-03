<template>
  <div>
    <h2>我是about</h2>
    <h2>{{counter}}</h2>
    <button @click="btnClick">+++</button>
  </div>
</template>


<script>
export default {
  name:'about',
  data() {
    return {
      counter:0
    }
  },
  methods:{
    btnClick() {
      this.counter ++
    }
  },
  // 缓存组件的额外 生命周期
  activated() {
    console.log('ac')
  },
  deactivated() {
    console.log('deac')

  },
  beforeCreate() {
    console.log('About1 beforeCreate')
  }, 
  created() {
    console.log('About1 created')
  }, 
  beforeMount() {
    console.log('About1 beforeMount')
  }, 
  mounted() {
    console.log('About1 mounted')
  }, 
 
  beforeunMount() {
    console.log('About1 beforunmount')
  },
  unmounted() {
    console.log('About1 unmounted')
  }, 
   beforeUpdate() {
    console.log('About1 beforeUpdate')
  }, 
  updated() {
    console.log('About1 updated')
  }, 
}
</script>

<style scoped>

</style>