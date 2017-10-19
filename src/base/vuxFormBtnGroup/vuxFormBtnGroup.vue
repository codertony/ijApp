<template>
  <div class="weui-form-preview__ft">
    <a class="weui-form-preview__btn" :class="{'weui-form-preview__btn_default': button.style==='default', 'weui-form-preview__btn_primary': button.style === 'primary'}" href="javascript:" v-for="button in buttons" @click="onButtonClick(button.onButtonClick, button.link)">{{button.text}}</a>
  </div>
</template>
<style lang="less" rel="stylesheet/less" type="text/less">
  @import '~vux/src/styles/weui/base/fn';
  .weui-form-preview__ft{
    position: relative;
    line-height: 50px;
    display: flex;
    &:after {
      .setTopLine(@weuiDialogLineColor);
    }
  }
  .weui-form-preview__btn {
    position: relative;
    display: block;
    flex: 1;
    color: @weuiDialogLinkColor;
    text-align: center;
    .setTapColor();
    button&{
      background-color: transparent;
      border: 0;
      outline: 0;
      line-height: inherit;
      font-size: inherit;
    }
    &:active {
      background-color: @weuiDialogLinkActiveBc;
    }
    &:after {
      .setLeftLine(@weuiDialogLineColor);
    }
    &:first-child {
      &:after {
        display: none;
      }
    }
  }
  .weui-form-preview__btn_default {
    color: @weuiTextColorGray;
  }
  .weui-form-preview__btn_primary {
    color: @form-preview-button-primary-color;
  }
  
</style>
<script>
  import { go } from 'common/js/router'
  export default {
    name: 'form-preview',
    props: ['buttons', 'data', 'show'],
    methods: {
      onButtonClick (cb, link) {
        cb && cb(this.data)
        if (link) {
          go(link, this.$router)
        }
      }
    },
    computed: {},
    components: {}
  }
</script>
