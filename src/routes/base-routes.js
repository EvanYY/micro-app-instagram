export default [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '*',
    name: 'Error404',
    component: () => import('@/pages/error/404.vue')
  }
]
