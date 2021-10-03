import { computed } from 'vue'
import { mapGetters, useStore } from 'vuex'

export function useGetters(mapper) {
  const store = useStore()
  // 获取对应的对象的 functions
  const storeStateFns = mapGetters(mapper)
  const storeState = []
  对数据进行转换
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({ $store: store })
    storeState[fnKey] = computed(fn)
  })
  return storeState
}
