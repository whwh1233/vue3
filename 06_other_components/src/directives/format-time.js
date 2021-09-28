import dayjs from 'dayjs'
export default function(app) {
  app.directive("format-time",{
    mounted(el,bindings) {
      let formatString = bindings.value
      if(!formatString) {
        formatString = "YYYY-MM-DD   HH:mm:ss"
      }
      const textContent = el.textContent
      const timestamp  = parseInt(textContent)
      if(textContent.length === 10) {
        const timestamp  = timestamp * 1000
      }
      el.textContent = dayjs(timestamp).format(formatString)
    }
  })
}