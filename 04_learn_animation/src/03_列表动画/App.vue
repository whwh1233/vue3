<template>
  <div>
    <button @click="addNum">添加数字</button>
    <button @click="removeNum">删除数字</button>

    
    <transition-group tag="p" name="why">
      <span v-for="(item) in numbers" :key="item" class="item">
        {{item}}
      </span>
    </transition-group>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      mesasge:0,
      numbers:[0,1,2,3,4,5],
      numCounter:10
    }
  },
  methods:{
    addNum() {
      this.numbers.splice(this.randomIndex(),0,this.numCounter++) 
    },
    removeNum(){
      this.numbers.splice(this.randomIndex(),1)
    },
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length)
    }
  }

}
</script>

<style scoped>
  .item{
    display: inline-block;
    margin: 10px;
    font-size: 20px;
  }
  .why-enter-from,
  .why-leave-to{
    opacity: 0;
    transform: translateY(30px);
  }
  .why-enter-active,
  .why-leave-active{
    transition: all 1s ease;
  }
  .why-leave-active{
    position: absolute
  }

  .why-move {
    transition: transform 1s ease;
  }
</style>