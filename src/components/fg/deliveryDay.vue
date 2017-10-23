<template>
  <transition name="fade">
    <div class="deliveryDayList">
      <search ref="search" :value="addr" @on-submit="onSubmit" @on-change="onChange" placeholder="物业地址" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel"></search>
      <div class="form-list">
        <ij-scroll ref="scroll" :data="list" @pullingDown="scrollPullDown" @pullingUp="ScrollPullUpLoad" :pullDownRefresh="scroll.pullDown" :pullUpLoad="scroll.pullUp">
          <div>
            <br>
            <template v-for="form,index in list">
              <form-preview v-show="!form.hide" :header-label="form.info[0].label" :header-value="form.info[0].value" :body-items="form.info" :footer-buttons="buttons2" :name="index"></form-preview>
              <br v-show="!form.hide">
            </template>
          </div>
        </ij-scroll>
      </div>
     
      <div v-transfer-dom>
        <popup v-model="datePopup" height="400px" is-transparent>
          <div style="width: 95%;background-color:#fff;height:380px;margin:0 auto;border-radius:5px;padding-top:10px;z-index: 510">
            <datetime-view v-model="inputDate" ref="datetime"></datetime-view>
            <div style="padding:5px 15px 15px;">
              <x-button type="primary" @click.native="deliveryDay()" >确定交割日</x-button>
              <x-button @click.native="datePopup = false">取消</x-button>
            </div>
          </div>
        </popup>
      </div>
    </div>
  </transition>
</template>

<script>
  import {
    TransferDom,
    FormPreview,
    Search,
    Group,
    Popup,
    XButton,
    DatetimeView
  } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    components: {
      FormPreview,
      Search,
      Group,
      Popup,
      XButton,
      DatetimeView
    },
    data () {
      return {
        scroll: {
          pullDown: true,
          pullUp: true
        },
        changeIndex: -1,
        addr: '',
        inputDate: '',
        datePopup: false,
        results: [],
        autoFixed: false,
        value: '',
        value1: 'hello',
        value2: 'vux',
        list: [
        ],
        buttons2: [{
          style: 'primary',
          text: '我要交割',
          onButtonClick: (arg) => {
            this.datePopup = true
            this.changeIndex = arg
          }
        }]
      }
    },
    methods: {
      deliveryDay() {
        let changeItem = this.list[this.changeIndex]
        changeItem.hide = true
        alert(changeItem.id)
        this.datePopup = false
      },
      onChange(val) {
        this.addr = val
      },
      onSubmit (val) {
        var that = this
        this.searchAddr(this.addr).then(function(data) {
          that.list = data.data.objArr
        })
        this.$refs.search.setBlur()
      },
      searchAddr (addr) {
        var params = addr ? {address: addr} : {}
        return this.axios.get('api/getAddress', {data: params})
      },
      onCancel () {
        console.log('on cancel')
      },
      onFocus () {
        console.log('on focus')
      },
      scrollPullDown: function () {
        var that = this
        this.searchAddr(this.addr).then(function(data) {
          that.list = data.data.objArr
        }).catch(function() {
          this.$refs.scroll.forceUpdate()
        })
      },
      ScrollPullUpLoad: function (a) {
        var that = this
        this.searchAddr(this.addr).then(function(data) {
          console.log(data)
          that.list = that.list.concat(data.data.objArr)
        }).catch(function() {
          that.$refs.scroll.forceUpdate()
        })
      }
    },
    created() {
      var that = this
      this.searchAddr(this.addr).then(function(data) {
        that.list = data.data.objArr
        that.scroll.pullDown = true
        that.scroll.pullUp = true
      })
    }
  }
</script>

<style lang="less" scoped type="text/less">
  .deliveryDayList{
    height: 100%;
  }
  .form-list{
    position: absolute;
    top: 40px;
    bottom: 0;
    width: 100%;
  }
</style>