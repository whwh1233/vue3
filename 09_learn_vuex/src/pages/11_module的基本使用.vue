<template>
  <div>
    <h2>当前计数：{{ $store.state.root }}</h2>
    <h2>当前计数：{{ $store.state.user.counter }}</h2>
    <h2>当前计数：{{ $store.state.home.message }}</h2>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { mapActions, useStore } from 'vuex'
import axios from 'axios'
export default {
  setup() {}
}
</script>

<style scoped></style>
