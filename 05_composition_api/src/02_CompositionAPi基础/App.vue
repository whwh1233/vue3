<template>
  <div>
    {{counter}}
    <button @click="add">++</button>
    <button @click="sub">--</button>
    <h2>double:{{double}}</h2>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      counter:0
    }
  },
  methods:{
    add() {
      this.counter++
    },
    sub() {
      this.counter--

    },
  },
  computed:{
    double() {
      return this.counter * 2
    }
  }
}
</script>