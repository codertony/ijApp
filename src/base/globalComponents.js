import ijScroll from '@/base/scroll/scroll'
import iconFont from '@/base/iconFont/iconFont'

const globalComponents = {
  install: function(Vue) {
    Vue.component('ij-scroll', ijScroll)
    Vue.component('iconfont', iconFont)
  }
}

export default globalComponents