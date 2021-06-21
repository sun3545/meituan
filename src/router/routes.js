import LayoutDefault from '@/layout/default'
import HomeIndex from '@/views/home'
export default [
  {
    path: '/',
    name: 'Home',
    component: LayoutDefault,
    redirect: { name: 'HomeIndex' },
    children: [
      {
        path: 'index',
        name: 'HomeIndex',
        component: HomeIndex
      },
      {
        path: 'city',
        name: 'ChangeCity',
        component: () => import('@/views/changeCity')
      },
      {
        path: 'goods/:name',
        name: 'Goods',
        component: () => import('@/views/goods')
      },
      {
        path: 'details/:name',
        name: 'Details',
        component: () => import('@/views/details')
      }
    ]
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register')
  }

]
