const test = () => import('@/components/fg/test')
const deliveryDay = () => import('@/components/fg/deliveryDay')

export default [
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/deliveryDay',
    name: 'deliveryDay',
    component: deliveryDay
  }
]
