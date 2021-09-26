
<template>
  <div>
    <input type="text" v-model="message">
    {{message}}
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    let message = ref("whwh1233")
    return {
      message
    }
  }
}
</script>