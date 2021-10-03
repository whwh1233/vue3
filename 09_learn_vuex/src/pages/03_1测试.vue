<template>
  <div>
    <h2>Home:{{ counter }}</h2>
    <h2>Home:{{ name }}</h2>
    <h2>Home:{{ age }}</h2>
    <h2>Home:{{ height }}</h2>
    <h2>2:{{ sCounter }}</h2>
    <h2>2:{{ sName }}</h2>
  </div>
</template>

<script>
import { useState } from '../hooks/index'
export default {
  setup() {
    const storeState = useState(['counter', 'age', 'height', 'name'])
    const storeState2 = useState({
      sCounter: state => state.counter,
      sName: state => state.name
    })
    return {
      ...storeState,
      ...storeState2
    }
  }
}
</script>
