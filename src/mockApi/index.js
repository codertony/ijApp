import MOCK from 'mockjs'
import APIS from './APIS'

export default function(apiEvn, urlFragment) {
  MOCK.setup({
    timeout: '500-1000'
  })
  var APIEVN = apiEvn || 'web'
  var URLFRAGMENT = urlFragment || ''
  if (APIEVN === 'web') {
    APIS.forEach(function (api, index) {
      let type = api.type || 'get'
      MOCK.mock(URLFRAGMENT + api.url, type, api.template)
      // url正则，正则拼接？
    })
  } else if (APIEVN === 'server') {
    return true
  }
}