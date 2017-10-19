<template>
  <transition name="fade">
    <div class="deliveryDayList">
      <search @on-submit="onSubmit" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel"></search>
      <ij-scroll :data="list">
        <div class="form-list">
          <group>
            <cell-form-preview :list="list"></cell-form-preview>
            <vux-form-btn-group :buttons="buttons2" :data="list" v-show="1"></vux-form-btn-group>
          </group>
          <br>
          <form-preview :header-label="('付款金额')" header-value="¥2400.00" :body-items="list" :footer-buttons="buttons1"></form-preview>
          <br>
          <form-preview :header-label="('付款金额')" header-value="¥2400.00" :body-items="list" :footer-buttons="buttons2" :name="list"></form-preview>
          <br>
          <form-preview :header-label="('付款金额')" header-value="¥2400.00" :body-items="list" :footer-buttons="buttons2" name="aaaa"></form-preview>
          <br>
          <group>
            <cell title="cell" value="hello" is-link></cell>
            <cell-box is-link>
              cell-box long long long long long long long
            </cell-box>
            <cell-box>
              cell-box hello world hello world hello world
            </cell-box>
            <cell title="cell" value="hello" is-link></cell>
          </group>
        </div>
      </ij-scroll>
      <div v-transfer-dom>
        <popup v-model="datePopup" height="400px" is-transparent>
          <div style="width: 95%;background-color:#fff;height:380px;margin:0 auto;border-radius:5px;padding-top:10px;z-index: 510">
            <datetime-view v-model="inputDate" ref="datetime"></datetime-view>
            <div style="padding:5px 15px 15px;">
              <x-button type="primary">确定交割日</x-button>
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
    Cell,
    CellBox,
    CellFormPreview,
    Popup,
    XButton,
    XSwitch,
    DatetimeView
  } from 'vux'
  import vuxFormBtnGroup from 'base/vuxFormBtnGroup/vuxFormBtnGroup.vue'
  export default {
    directives: {
      TransferDom
    },
    components: {
      vuxFormBtnGroup,
      FormPreview,
      Search,
      Group,
      Cell,
      CellBox,
      CellFormPreview,
      Popup,
      XButton,
      XSwitch,
      DatetimeView
    },
    data () {
      return {
        datePopup: false,
        results: [],
        autoFixed: false,
        value: '',
        value1: 'hello',
        value2: 'vux',
        list: [{
          label: '商品',
          value: '电动打蛋机'
        }, {
          label: '标题标题',
          value: '名字名字名字'
        }, {
          label: '标题标题',
          value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
        }],
        buttons1: [{
          style: 'default',
          text: '辅助操作'
        }, {
          style: 'primary',
          text: '跳转到首页',
          link: '/'
        }],
        buttons2: [{
          style: 'primary',
          text: '我要交割',
          onButtonClick: (test) => {
            this.datePopup = true
          }
        }]
      }
    },
    methods: {
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        this.results = val ? getResult(this.value) : []
      },
      onSubmit (val) {
        window.alert('on submit' + val)
      },
      onCancel () {
        console.log('on cancel')
      },
      onFocus () {
        console.log('on focus')
      }
    }
  }
  function getResult (val) {
    let rs = []
    for (let i = 0; i < 8; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
  }
</script>

<style lang="less" scoped type="text/less">
  .deliveryDayList{
    height: 100%;
  }
  .form-list{
    padding-top: 40px;
    padding-bottom: 10px;
  }
</style>