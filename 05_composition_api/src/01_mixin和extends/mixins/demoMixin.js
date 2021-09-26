export const demoMixin = {
  data() {
    return {
      message:'hello world whwh1233'
    }
  },
  methods:{
    foo() {
      console.log('mixin foo')
    }
  },
  created() {
    console.log('created')
  }
}
// 混入其实就是对象
// 一个mixin 对象可以包含组件有的任何选项