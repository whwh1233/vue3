<template>
  <h2>是什么呢：{{ counter }}</h2>
</template>

<script>
export default {
  props: {
    counter: {
      type: Number,
      default: 0
    }
  }
}
</script>
