<template>
  <div>
    <h2 @click="btnClick">
      Login
    </h2>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const btnClick = () => {
      window.localStorage.setItem('token', 'why')
      console.log('登录了')
      router.push({
        path: '/home'
      })
    }
    return { btnClick }
  }
}
</script>
