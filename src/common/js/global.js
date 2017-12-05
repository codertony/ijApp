export default {
  userId: (function () {
    return location.search.split('=')[1]
  })(),
  RP: 'api'
}
