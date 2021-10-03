<template>
  <div>
    <h2>root{{ $store.state.counter }}</h2>
    <h2>user{{ $store.state.user.counter }}</h2>
    <h2>home{{ $store.state.home.counter }}</h2>
    <button @click="homeAdd">home +1</button>
    <button @click="homeAddAction">派发事件</button>
    <hr />
    <!-- getters 默认进行了合并 -->
    <h2>{{ $store.getters['home/doubleHomeCounter'] }}</h2>
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
      this.$store.commit['home/add']
      console.log('aaa')
    },
    homeAddAction() {
      this.$store.commit['user/add']
    }
  }
}
</script>

<style scoped></style>
