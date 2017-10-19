<template>
  <i class='iconfont' :style='style' v-html='icon'></i>
</template>
<style scoped lang='less' rel='stylesheet/less'>

</style>
<script>
  import 'common/css/iconfont/iconfont.css'
  export default {
    name: 'slider',
    props: {
      icon: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 15
      }
    },
    computed: {
      style () {
        if (this.color) {
          return 'color:' + this.color + ';font-size:' + this.size
        } else {
          return 'font-size:' + this.size
        }
      }
    },
    methods: {},
    components: {}
  }
</script>
