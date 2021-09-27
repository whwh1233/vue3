import { ref, watch } from 'vue'
export default function(t) {
  const title = t || '默认title'
  const titleRef = ref(title)
  watch(
    titleRef,
    newValue => {
      document.title = newValue
    },
    {
      immediate: true
    }
  )
  return titleRef
}
