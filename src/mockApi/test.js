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
  }
]