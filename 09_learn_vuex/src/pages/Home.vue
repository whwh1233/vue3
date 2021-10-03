<template>
  <div>
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <h2>当前计数：{{ $store.state.user.counter }}</h2>
    <h2>当前计数：{{ $store.state.home.counter }}</h2>
    <button @click="homeAdd">home +1</button>
    <button @click="homeAddAction">派发事件</button>
    <hr />
    <!-- getters 默认进行了合并 -->
    <h2>{{ $store.getters.doubleHomeCounter }}</h2>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { mapActions, useStore } from 'vuex'
import axios from 'axios'
export default {
  setup() {},
  methods: {
    homeAdd() {
      this.$store.commit('add')
    },
    homeAddAction() {
      this.$store.commit('add')
    }
  }
}
</script>

<style scoped></style>
