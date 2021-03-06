import Layout from '@/page/index/'
export default [
  {
    path: '*',
    redirect: '/404',
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/components/error-page/404'),
    name: '404'
  },
  {
    path: '/403',
    component: () => import('@/components/error-page/403'),
    name: '403'
  },
  {
    path: '/500',
    component: () => import('@/components/error-page/500'),
    name: '500'
  },
  {
    path: '/',
    name: '主页',
    redirect: '/wel'
  },
  {
    path: '/myiframe',
    component: Layout,
    redirect: '/myiframe',
    children: [
      {
        path: ':routerPath',
        name: 'iframe',
        component: () => import('@/components/iframe/main'),
        props: true
      }
    ]
  }
]
