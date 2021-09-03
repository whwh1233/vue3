<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="mid">
      <slot name="mid"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
    <div class="addition">
      <slot :name="name"></slot>
    </div>
  </div>
</template>


<script>
// 高级组件的插槽名 也应该是动态的  
export default {
  data() {
    return {
      slotName:'wh'
    }
  },
  props:{
    name
  }

}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.nav-bar {
  display: flex;
  height: 200px;
  widows: 1000px;
}
.left , .right {
  width:200px;
  height: 200px;
  background:red
}

.mid{
  flex: 1;
  background: blue;
}
</style>