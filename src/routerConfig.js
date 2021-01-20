import { createBrowserHistory } from 'history'
import Departmemt from '@/pages/Department'
import Dining from '@/pages/Dining'
import DataStatistics from '@/pages/DataStatistics'
import UserList from '@/pages/UserList'
import UserReview from '@/pages/UserReview'

export const history = createBrowserHistory()

export default [
  {
    name: '就餐',
    path: '/dining',
    component: Dining,
  },
  {
    name: '数据统计',
    path: '/dataStatistics',
    component: DataStatistics,
  },
  {
    name: '用户管理',
    path: '/user',
    children: [
      {
        name: '用户列表',
        path: '/user/list',
        component: UserList,
      },
      {
        name: '用户审核',
        path: '/user/review',
        component: UserReview,
      },
    ],
  },
  {
    name: '部门管理',
    path: '/department',
    component: Departmemt,
  },
]
