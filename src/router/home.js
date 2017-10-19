import homePage from '@/components/homePage/homePage'
import menuList from '@/components/homePage/menuList'
import userList from '@/components/homePage/userList'
import workSpace from '@/components/homePage/workSpace'

export default [
  {
    path: '/homePage',
    name: 'homePage',
    components: {
      home: homePage
    },
    children: [
      {
        path: '/homePage/menuList',
        name: 'menuList',
        component: menuList
      },
      {
        path: '/homePage/userList',
        name: 'userList',
        component: userList
      },
      {
        path: '/homePage/workSpace',
        name: 'workSpace',
        component: workSpace
      }
    ]
  }
]