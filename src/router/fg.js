const test = () => import('@/components/fg/test')
const deliveryDay = () => import('@/components/fg/deliveryDay')
const appointmentCheck = () => import('@/components/fg/appointmentCheck')

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
  },
  {
    path: '/appointmentCheck',
    name: 'appointmentCheck',
    component: appointmentCheck
  }
]
