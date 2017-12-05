<template>
  <transition name="fade">
    <div class="deliveryDayList">
      <flexbox :gutter="0">
        <flexbox-item :span="0">
          <div class="searchAddBox vux-1px-b">
            <button class="newAppointment" @click="show.newAp = true">+</button>
          </div>
        </flexbox-item>
        <flexbox-item :span="8/10">
          <search ref="search" v-model="addr" @on-submit="onSubmit" placeholder="合同号" :auto-fixed="autoFixed"
                  @on-cancel="onCancel"></search>
        </flexbox-item>
        <flexbox-item :span="0">
          <div class="searchAddBox vux-1px-b">
            <button class="newAppointment" @click="show.moreFilter = true">@</button>
          </div>
        </flexbox-item>
      </flexbox>
      <div class="listTotal">
        查询结果：{{listTotal}}条
      </div>
      <div class="form-list">
        <ij-scroll ref="scroll" :data="list" @pullingDown="scrollPullDown" @pullingUp="ScrollPullUpLoad"
                   :pullDownRefresh="scroll.pullDown" :pullUpLoad="scroll.pullUp">
          <div>
            <template v-for="form,index in list">
              <transition name="fadeLeave">
                <div>
                  <form-preview @click.native="showDetail(index)" class="list-li" :header-label="form.label" :header-value="form.value" :body-items="form.list"
                                :footer-buttons="form.hasBtn?buttons2:null" :name="index"></form-preview>
                  <br>
                </div>
              </transition>
            </template>
          </div>
        </ij-scroll>
      </div>
      <div v-transfer-dom>
        <popup v-model="show.newAp" @on-hide="newApClose()" position="left" width="100%">
          <div class="popup-box">
            <group>
              <x-input v-model="newAp.contractNo" title="预约合同号"></x-input>
              <datetime v-model="newAp.yyDate" title="预约日期"></datetime>
            </group>
            <group>
              <divider>到达状态</divider>
              <checker v-model="newAp.timeId" default-item-class="checker-btn" selected-item-class="checker-btn-selected">
              </checker>
            </group>
            <div class="popup-box-bottom-btn">
              <flexbox>
                <flexbox-item>
                  <x-button type="primary" @click.native="newApClose()">确认</x-button>
                </flexbox-item>
                <flexbox-item>
                  <x-button @click.native="show.newAp = false">取消</x-button>
                </flexbox-item>
              </flexbox>
            </div>
          </div>
        </popup>
      </div>
      <div v-transfer-dom>
        <popup v-model="show.moreFilter" position="right" width="80%">
          <div class="popup-box">
            <group>
              <divider>预约状态</divider>
              <checker v-model="search.oppointment" default-item-class="checker-btn" selected-item-class="checker-btn-selected">
                <checker-item value="9">全部</checker-item>
                <checker-item value="0">已预约</checker-item>
                <checker-item value="1">已取消</checker-item>
              </checker>
              <divider>确认状态</divider>
              <checker v-model="search.check" default-item-class="checker-btn" selected-item-class="checker-btn-selected">
                <checker-item value="9">全部</checker-item>
                <checker-item value="1">已确认</checker-item>
                <checker-item value="2">未确认</checker-item>
              </checker>
              <divider>到达状态</divider>
              <checker v-model="search.arrive" default-item-class="checker-btn" selected-item-class="checker-btn-selected">
                <checker-item value="9">全部</checker-item>
                <checker-item value="1">准时</checker-item>
                <checker-item value="2">提前</checker-item>
                <checker-item value="3">迟到</checker-item>
                <checker-item value="4">未到</checker-item>
              </checker>
              <br>
              <datetime v-model="search.dateTime" title="预约日期"></datetime>
              <popup-picker title="预约时间区间" :popup-style="{'z-index':2000}" :data="timeRange"  v-model="search.timeRange" :show-name=true ref="timeRangePicker" @on-change="timeRangeChange" @on-shadow-change="timeRangePickerChange"></popup-picker>
              <x-input v-model="search.user" title="预约经纪人"></x-input>
            </group>
            <div class="popup-box-bottom-btn">
              <flexbox>
                <flexbox-item>
                  <x-button type="warn">重置</x-button>
                </flexbox-item>
                <flexbox-item>
                  <x-button type="primary">确认</x-button>
                </flexbox-item>
              </flexbox>
            </div>
          </div>
        </popup>
      </div>
      <div v-transfer-dom>
        <confirm v-model="show.cancelAp"
                 title=""
                 @on-cancel=""
                 @on-confirm=""
                 confirm-text="是"
                 cancel-text="否"
                 >
          <p style="text-align:center;">是否确认取消预约</p>
        </confirm>
      </div>
      <div v-transfer-dom>
        <popup v-model="show.enterAp" height="520px" is-transparent>
          <div
            style="width: 95%;background-color:#fff;height:500px;margin:0 auto;border-radius:5px;padding-top:10px;z-index: 510">
            <group>
              <cell :title="enterPage.label" :value="enterPage.value"></cell>
              <cell-form-preview :list="enterPage.list"></cell-form-preview>
              <x-input v-model="enterData.enterNumber" title="回单号"></x-input>
              <divider>确认状态</divider>
              <checker class="center-text" v-model="enterData.check" default-item-class="checker-btn" selected-item-class="checker-btn-selected">
                <checker-item value="1">已确认</checker-item>
                <checker-item value="2">未确认</checker-item>
              </checker>
              <divider>到达状态</divider>
              <checker class="center-text" v-model="enterData.arrive" default-item-class="checker-btn" selected-item-class="checker-btn-selected">
                <checker-item value="1">准时</checker-item>
                <checker-item value="2">提前</checker-item>
                <checker-item value="3">迟到</checker-item>
                <checker-item value="4">未到</checker-item>
              </checker>
              <br>
            </group>
            <br>
            <div style="padding:5px 15px 15px;">
              <flexbox>
                <flexbox-item>
                  <x-button type="primary" @click.native="deliveryDay()">确定</x-button>
                </flexbox-item>
                <flexbox-item>
                  <x-button @click.native="show.enterAp = false">取消</x-button>
                </flexbox-item>
              </flexbox>
            </div>
          </div>
        </popup>
      </div>
      <div v-transfer-dom>
        <popup v-model="show.detailPage" height="400px" is-transparent>
          <div
            style="width: 95%;background-color:#fff;margin:0 auto;border-radius:5px;padding-top:10px;z-index: 510">
            <group>
              <cell :title="detailPage.label" :value="detailPage.value"></cell>
              <cell-form-preview :list="detailPage.list"></cell-form-preview>
              <x-input v-model="enterData.enterNumber" title="回单号"></x-input>
            </group>
            <br>
          </div>
          <div class="close-circle">
            <span class="vux-close"></span>
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
    DatetimeView,
    Flexbox,
    FlexboxItem,
    Selector,
    Datetime,
    Divider,
    Checker,
    CheckerItem,
    XInput,
    Picker,
    PopupPicker,
    Confirm,
    Cell,
    CellFormPreview
  } from 'vux'
  import {formatDate} from '@/filter/formatDate'
  
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
      DatetimeView,
      Flexbox,
      FlexboxItem,
      Selector,
      Datetime,
      Divider,
      Checker,
      CheckerItem,
      XInput,
      Picker,
      PopupPicker,
      Confirm,
      Cell,
      CellFormPreview
    },
    data() {
      return {
        show: {
          moreFilter: false,
          newAp: false,
          cancelAp: false,
          enterAp: false,
          detailPage: false
        },
        newAp: {
          contractNo: '',
          yyDate: '',
          timeId: ''
        },
        search: {
          oppointment: '',
          arrive: '',
          check: '',
          dateTime: '',
          user: '',
          timeRange: []
        },
        enterData: {
          check: '',
          arrive: '',
          enterNumber: ''
        },
        timeRange: [
          [
            {
              name: '9:00',
              value: '0'
            },
            {
              name: '10:00',
              value: '1'
            },
            {
              name: '11:00',
              value: '2'
            },
            {
              name: '13:00',
              value: '3'
            },
            {
              name: '14:00',
              value: '4'
            }
          ],
          [
            {
              name: '-',
              value: '-'
            }
          ],
          [
            {
              name: '9:00',
              value: '0'
            },
            {
              name: '10:00',
              value: '1'
            },
            {
              name: '11:00',
              value: '2'
            },
            {
              name: '13:00',
              value: '3'
            },
            {
              name: '14:00',
              value: '4'
            }
          ]
        ],
        checkOption: {
          oppointment: ['已预约', '已取消'],
          arrive: ['默认', '准时', '提前', '迟到', '未到'],
          check: ['默认', '未验件', '已验件']
        },
        scroll: {
          pullDown: true,
          pullUp: true
        },
        enterIndex: -1,
        detailIndex: -1,
        addr: '',
        inputDate: '',
        results: [],
        autoFixed: false,
        listTotal: '',
        listData: [],
        buttons2: [
          {
            style: 'default',
            text: '取消预约',
            onButtonClick: (arg) => {
              this.show.cancelAp = true
              this.changeIndex = arg
            }
          }, {
            style: 'primary',
            text: '预约确认',
            onButtonClick: (arg) => {
              this.enterIndex = arg
              this.show.enterAp = true
            }
          }]
      }
    },
    computed: {
      list: function () {
        return this.listData.map((li) => {
          let liData = {
            label: '合同号',
            value: li.contract.contractNo,
            id: li.id,
            hasBtn: 0
          }
          let checkState
          if (li.status === 0 && li.yjResult) {
            checkState = this.checkOption.arrive[li.arrivalStatus] + '/' + this.checkOption.check[li.yjResult]
          } else {
            checkState = this.checkOption.oppointment[li.status]
            if (li.status === 0) {
              liData.hasBtn = 1
            }
          }
          liData.list = [
            {
              label: '预约日期',
              value: formatDate(li.yyDate)
            },
            {
              label: '预约时间段',
              value: li.period.timeStr
            },
            {
              label: '经纪人',
              value: li.agent.name
            },
            {
              label: '预约状态',
              value: checkState
            }
          ]
          return liData
        })
      },
      enterPage: function () {
        if (this.detailIndex !== -1) {
          return this.list[this.detailIndex]
        } else {
          return {}
        }
      },
      detailPage: function () {
        if (this.detailIndex !== -1) {
          return this.list[this.detailIndex]
        } else {
          return {}
        }
      }
    },
    methods: {
      showDetail(index) {
        this.detailIndex = index
        this.show.detailPage = true
      },
      timeRangeChange(value) {
        console.log(value)
        console.log(this.search.timeRange)
      },
      timeRangePickerChange(arrId, arrName) {
        console.log(arrId)
      },
      newApClose() {
        Object.assign(this.newAp, {
          contractNo: '',
          yyDate: '',
          timeId: ''
        })
      },
      deliveryDay() {
        let changeItem = this.list[this.changeIndex]
        alert(changeItem.id)
        changeItem.hide = true
        this.datePopup = false
        this.$refs.scroll.forceUpdate()
      },
      onSubmit(val) {
        this.searchAddr(this.addr).then(result => {
          this.listData = result.data.root
        })
        this.$refs.search.setBlur()
      },
      searchAddr(addr) {
        console.log(this.GLOBAL.RP + '/mm/yyyj/getYYYJList.json')
        var params = addr ? {address: addr} : {}
        return this.axios.get(this.GLOBAL.RP + '/mm/yyyj/getYYYJList.json', {data: params})
      },
      onCancel() {
        console.log('on cancel')
      },
      scrollPullDown: function () {
        this.searchAddr(this.addr).then((result) => {
          this.listData = result.data.root
        }).catch(() => {
          this.$refs.scroll.forceUpdate()
        })
      },
      ScrollPullUpLoad: function (a) {
        this.searchAddr(this.addr).then(result => {
          this.listData = this.listData.concat(result.data.root)
        }).catch(() => {
          this.$refs.scroll.forceUpdate()
        })
      }
    },
    created() {
      this.searchAddr(this.addr).then(result => {
        console.log(result)
        this.listData = result.data.root
        this.listTotal = result.data.total
        this.scroll.pullDown = true
        this.scroll.pullUp = true
      })
    }
  }
</script>

<style lang="less" scoped type="text/less">
  .deliveryDayList {
    height: 100%;
  }
  .searchAddBox{
    background: #efeff4;
    height: 44px;
    display: block;
    z-index: 2;
    button{
      border: 0;
      height: 100%;
      font-size: 30px;
      background: transparent;
      color: @button-tab-default-text-color;
      padding: 0 10px;
    }
  }
  .checker-btn{
    background: @button-tab-default-background-color;
    border: 1px solid @button-tab-default-border-color;
    margin: 2px 5px;
    padding: 3px 8px;
    color: @button-tab-default-text-color;
  }
  .checker-btn-selected{
    background: @button-tab-active-background-color;
    border-color: @button-tab-active-border-color;
    color: @button-tab-default-background-color;
  }
  
  .form-list {
    position: absolute;
    top: 62px;
    bottom: 0;
    width: 100%;
  }
  .listTotal{
    background: #e6e6e6;
    text-align: right;
    padding: 0 5px;
    font-size: 11px;
    color: #858585;
    height: 18px;
  }
  .scroll-content{
    div{
      background: @backgroundColor;
    }
  }
  .list-li{
    background: #fff !important;
  }
  .popup-box{
    position: relative;
    height: 96%;
    .popup-box-bottom-btn{
      padding: 0 3%;
      width: 94%;
      position: absolute;
      bottom: 10px;
    }
  }
  .close-circle{
    text-align: center;
    margin-top: 10px;
    .vux-close{
      font-size: 30px;
      height: 30px;
      width: 30px;
      border-radius: 30px;
      border: 1px solid #fff3e0;
      color: #fff3e0;
      line-height: 30px;
    }
  }
</style>