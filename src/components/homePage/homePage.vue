<template>
  <div>
    <div class="homeContent">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <tabbar>
      <tabbar-item show-dot :link="{path:'/homePage/menuList',activeClass:'own-defined-class',exact:true}">
        <span slot="label">例子</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/homePage/workSpace',activeClass:'own-defined-class',exact:true}" >
        <span slot="label">菜单</span>
      </tabbar-item>
      <tabbar-item badge="2" :link="{path:'/homePage/userList',activeClass:'own-defined-class',exact:true}">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script type="text/ecmascript-6">
  import { Tabbar, TabbarItem } from 'vux'
  export default {
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>
<style lang="less" scoped rel="stylesheet/less" type="text/less">
  html, body {
    height: 100%;
    overflow-y: hidden;
  }
  .homeContent{
    position: fixed;
    top: 0;
    bottom: 56px;
    width: 100%;
    overflow-y: auto;
  }
  
  
  #bottomNav {
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>

