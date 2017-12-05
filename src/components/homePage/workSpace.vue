<template>
  <div>
    <ij-scroll ref="scroll"
              :data="appList">
      <div>
        <div class="appGroup">
          <div class="appGroup-title">
            常用应用
          </div>
          <div class="appBtnRow">
            <router-link v-for="item in appList" class="appBtn" :to="item.link">
        <span class="appIcon">
          <iconfont :icon="item.icon" size="28px" :class='item.color'></iconfont>
        </span>
              <span class="appName">{{item.name}}</span>
            </router-link>
          </div>
        </div>
  
        <div class="appGroup">
          <div class="appGroup-title">
            房管应用
          </div>
          <div class="appBtnRow">
            <router-link v-for="item in appList" class="appBtn" to="/test">
        <span class="appIcon">
          <iconfont :icon="item.icon" size="28px" :class='item.color'></iconfont>
        </span>
              <span class="appName">{{item.name}}</span>
            </router-link>
          </div>
        </div>
  
        <div class="appGroup">
          <div class="appGroup-title">
            相寓应用
          </div>
          <div class="appBtnRow">
            <router-link v-for="item in appList" class="appBtn" to="/test">
        <span class="appIcon">
          <iconfont :icon="item.icon" size="28px" :class='item.color'></iconfont>
        </span>
              <span class="appName">{{item.name}}</span>
            </router-link>
          </div>
        </div>
        
        <div class="appGroup">
          <div class="appGroup-title">
            常用应用
          </div>
          <div class="appBtnRow">
            <router-link v-for="item in appList" class="appBtn" to="/test">
        <span class="appIcon">
          <iconfont :icon="item.icon" size="28px" :class='item.color'></iconfont>
        </span>
              <span class="appName">{{item.name}}</span>
            </router-link>
          </div>
        </div>
  
        <div class="appGroup">
          <div class="appGroup-title">
            房管应用
          </div>
          <div class="appBtnRow">
            <router-link v-for="item in appList" class="appBtn" to="/test">
        <span class="appIcon">
          <iconfont :icon="item.icon" size="28px" :class='item.color'></iconfont>
        </span>
              <span class="appName">{{item.name}}</span>
            </router-link>
          </div>
        </div>
  
        <div class="appGroup">
          <div class="appGroup-title">
            相寓应用
          </div>
          <div class="appBtnRow">
            <router-link v-for="item in appList" class="appBtn" to="/test">
        <span class="appIcon">
          <iconfont :icon="item.icon" size="28px" :class='item.color'></iconfont>
        </span>
              <span class="appName">{{item.name}}</span>
            </router-link>
          </div>
        </div>
      </div>
    </ij-scroll>
    
  </div>
</template>
<script>
  export default{
    data () {
      return {
        appList: [
          {
            name: '交割日',
            icon: '&#xe60f;',
            color: 'blue',
            link: '/deliveryDay'
          },
          {
            name: '预约验件',
            icon: '&#xe611;',
            color: 'red',
            link: '/appointmentCheck'
          },
          {
            name: '我的待审',
            icon: '&#xe601;',
            color: 'yellow',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe60c;',
            color: 'green',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe60d;',
            color: 'yellow',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe60f;',
            color: 'blue',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe611;',
            color: 'red',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe601;',
            color: 'yellow',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe60c;',
            color: 'green',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe60f;',
            color: 'blue',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe611;',
            color: 'red',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe601;',
            color: 'yellow',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe60c;',
            color: 'green',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe60d;',
            color: 'yellow',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe60f;',
            color: 'blue',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe611;',
            color: 'red',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe601;',
            color: 'yellow',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe60c;',
            color: 'green',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe60f;',
            color: 'blue',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe611;',
            color: 'red',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe601;',
            color: 'yellow',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe60c;',
            color: 'green',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe60d;',
            color: 'yellow',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe60f;',
            color: 'blue',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe611;',
            color: 'red',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe601;',
            color: 'yellow',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe60c;',
            color: 'green',
            link: '/test'
          },
          {
            name: '我的待审',
            icon: '&#xe60d;',
            color: 'yellow',
            link: '/test'
          }
        ]
      }
    },
    components: {
    }
  }
</script>
<style lang="less" scoped rel="stylesheet/less" type="text/less">
  .appBtnRow{
    display : flex;
    flex-wrap : wrap;
    margin: 10px 0 5px 0;
    .appBtn{
      width : 25%;
      text-align : center;
      margin-bottom: 10px;
      .appName{
        color: @textColor;
      }
      .appIcon{
        margin : 5px auto;
        display : block;
      }
    }
  }
  
  .appGroup{
    border-bottom: 1px solid #f0f0f0;
    .appGroup-title{
      margin: 15px 0 0 12px;
      font-size: 15px;
      color: @lightTextColor;
      position: relative;
      padding-left: 12px;
      &:before{
        content: "";
        background-color: @primaryColor;
        display: inline-block;
        height: 15px;
        width: 6px;
        border-radius: 2px;
        position: absolute;
        top: 5px;
        left: 0;
      }
    }
  }
  
  
</style>

