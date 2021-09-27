import { ref, computed } from 'vue'
export default function() {
  const counter = ref(0)
  const add = () => {
    counter.value++
  }
  const sub = () => {
    counter.value--
  }
  const double = computed(() => counter.value * 2)
  return { counter, double, add, sub }
}
