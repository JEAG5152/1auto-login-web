import { createRouter, createWebHistory } from 'vue-router'

import _Register from '#/router/modules/register/index'
import _TermsAndConditions from '#/router/modules/termsandconditions/index'
import _Contact from '#/router/modules/contact/index'

const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },
  history: routerHistory,
  routes: [
    {
      name: 'inicio',
      path: '/',
      component: () => import('#/pages/home.vue')
    },
    ..._Register,
    ..._TermsAndConditions,
    ..._Contact
    // {
    //   name: 'restablecer-contraseña',
    //   path: '/restablecer-contraseña',
    //   component: () => import('#/pages/ResetPassword.vue')
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   component: () => import('#/pages/PageNotFound.vue')
    // }
  ],
  base: "/",
})

router.beforeEach((to, from, next) => {
    // ...
    // explicitly return false to cancel the navigation
    // return true
    next()
})

export default router
