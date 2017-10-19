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
  }
]