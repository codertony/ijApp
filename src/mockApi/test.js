import Mock from 'mockjs'

export default [
  {url: '/test',
    type: 'get',
    template: {
      'objArr|5-15': [
        {
          'foo': 'Hello',
          'nested': {
            'a': {
              'b': {
                'c': 'Mock.js'
              }
            }
          },
          'regexp': /\w\W\s\S\d\D/,
          'now': '@now',
          'img': '@image(\'200x100\', \'#50B347\', \'#000\', \'Mock.js\')',
          'clolor': '@color',
          'cparagraph': '@cparagraph(1, 3)',
          'cname': '@cname',
          'url': '@url',
          'county': '@county(true)'
        }
      ]
    }
  },
  {url: '/getAddress',
    template: function(options) {
      var params = JSON.parse(options.body)
      var addr = params.address || ''
      return Mock.mock({
        'objArr|6-10': [
          {
            'info': [{
              'label': '物业地址',
              'value': '@county(true) ' + addr,
              'test': function() {
                return JSON.stringify(params)
              }
            }],
            'id': '@guid'
          }
        ]
      })
    }
  },
  {url: '/mm/yyyj/getYYYJList.json',
    template: function(options) {
       // var params = JSON.parse(options.body)
      return Mock.mock({
        page: 1,
        total: 2,
        records: 20,
        rows: 20,
        'root|6-10': [
          {
            'id': '@guid()',
            contract: {
              'contractNo': /[a-z]{2}\d{10}/
            },
            agent: {
              'name': '@cname()'
            },
            createTime: '@datetime("T")',
            'yyDate': '@datetime("T")',
            'period': {
              'timeStr': '10:30-11:30'
            },
            'status|0-1': 0.1,
            'arrivalStatus|0-4': 1,
            'yjResult|0-2': 1
          }
        ]
      })
    }
  }
]