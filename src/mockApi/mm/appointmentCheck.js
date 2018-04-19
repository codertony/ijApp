import Mock from 'mockjs'

export default [
  {url: '/mm/yyyj/getYYYJList.json',
    template: function(options) {
      // var params = JSON.parse(options.body)
      return Mock.mock({
        page: 1,
        'total|50-100': 60,
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