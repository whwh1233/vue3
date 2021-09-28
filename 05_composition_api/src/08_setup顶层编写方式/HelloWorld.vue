<template>
  <div>
    <h3>hello </h3>
    <h3>{{message}} </h3>
    <button @click="emitEvent">发射</button>
  </div>
</template>

<script setup>
  import {defineProps,defineEmit} from 'vue'
  const props = defineProps({
    message:{
      type:String,
      default:'hwhw'
    }
  })
  const emit  = defineEmit(["increment",'decrement'])
  const emitEvent = () => {
    emit('increment','1000')
  }
</script>