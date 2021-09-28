<template>
  <div>
    <h2 v-format-time="'YYYY-MM-DD HH:mm'">{{timestamp}}</h2>
  </div>
</template>

<script>

export default {
  setup() {
    const timestamp = 1632816494
    return {timestamp}

  },
  
}
</script>

