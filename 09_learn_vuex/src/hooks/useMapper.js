import { computed } from 'vue'
import { mapState, mapGetters, useStore } from 'vuex'

export function useMapper(mapper, mapFn) {
  const store = useStore()
  // 获取对应的对象的 functions
  const storeStateFns = mapFn(mapper)
  const storeState = []
  // 对数据进行转换
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({ $store: store })
    storeState[fnKey] = computed(fn)
  })
  return storeState
}
