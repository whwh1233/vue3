<template>
  <div>
    <h3>{{fullName}}</h3>

    <button @click="changeName">修改</button>
  </div>
</template>

<script>
import { ref,computed } from 'vue'
export default {
  setup() {
    let firstName = ref("wh")
    let lastName = ref("1233")
    // 用法1. 传入一个getter 函数
    // computed 返回的就是一个 ref 对象
    // const fullName = computed(() => firstName.value + " " + lastName.value)  
    const changeName = () => {
      fullName.value = 'whw111hwhwh 1233'
    } 
    // 用法2，传入一个对象 getter  setter
    const fullName = computed({
      get:() => firstName.value + " " + lastName.value,
      set(newValue){
        const names = newValue.split(" ")
        firstName.value = names[0]
        lastName.value = names[1]
      }
    })
    return {
      firstName,
      lastName,
      fullName,
      changeName
    }
  }
}
</script>

<style scoped>

</style>