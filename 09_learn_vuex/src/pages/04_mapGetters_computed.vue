<template>
  <div>
    <h2>总价值 {{ $store.getters.totalPrice }}</h2>
    <h2>总价值 {{ $store.getters.totalPriceCounterGreaterN(3) }}</h2>
    <h2>{{ ageInfo }}</h2>
    <h2>{{ heightInfo }}</h2>
    <h2>{{ nameInfo }}</h2>
    <h2>{{ sNameInfo }}</h2>
    <h2>{{ sHeightInfo }}</h2>
    <h2>{{ sAgeInfo }}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['nameInfo', 'ageInfo', 'heightInfo']),
    ...mapGetters({
      sNameInfo: 'nameInfo',
      sAgeInfo: 'ageInfo',
      sHeightInfo: 'heightInfo'
    })
  }
}
</script>

<style scoped></style>
