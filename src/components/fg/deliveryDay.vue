<template>
  <transition name="fade">
    <div class="deliveryDayList">
      <search ref="search" v-model="addr" @on-submit="onSubmit" placeholder="物业地址" :auto-fixed="autoFixed" @on-cancel="onCancel"></search>
      <div class="form-list">
        <ij-scroll ref="scroll" :data="list" @pullingDown="scrollPullDown" @pullingUp="ScrollPullUpLoad" :pullDownRefresh="scroll.pullDown" :pullUpLoad="scroll.pullUp">
          <div>
            <br>
            <template v-for="form,index in list">
              <transition name="fadeLeave">
                <div v-if="!form.hide">
                  <form-preview :header-label="form.info[0].label" :header-value="form.info[0].value" :body-items="form.info" :footer-buttons="buttons2" :name="index"></form-preview>
                  <br >
                </div>
              </transition>
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
        alert(changeItem.id)
        changeItem.hide = true
        this.datePopup = false
        /* this.$nextTick(() => {
          setTimeout(() => {
            this.$delete(this.list, this.changeIndex)
            this.changeIndex = -1
            console.log(this.list)
          }, 550)
        }) */
        this.$refs.scroll.forceUpdate()
      },
      onSubmit (val) {
        this.searchAddr(this.addr).then(data => {
          this.list = data.data.objArr
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
      scrollPullDown: function () {
        this.searchAddr(this.addr).then((data) => {
          this.list = data.data.objArr
        }).catch(() => {
          this.$refs.scroll.forceUpdate()
        })
      },
      ScrollPullUpLoad: function (a) {
        this.searchAddr(this.addr).then(data => {
          console.log(data)
          this.list = this.list.concat(data.data.objArr)
        }).catch(() => {
          this.$refs.scroll.forceUpdate()
        })
      }
    },
    created() {
      this.searchAddr(this.addr).then(data => {
        this.list = data.data.objArr
        this.scroll.pullDown = true
        this.scroll.pullUp = true
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