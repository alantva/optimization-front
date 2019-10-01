import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _91383e20 = () => interopDefault(import('../pages/otimizacao.vue' /* webpackChunkName: "pages/otimizacao" */))
const _3c6815dc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _434deb98 = () => interopDefault(import('../pages/*.vue' /* webpackChunkName: "pages/*" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/otimizacao",
      component: _91383e20,
      name: "otimizacao"
    }, {
      path: "/",
      component: _3c6815dc,
      name: "index"
    }, {
      path: "/*",
      component: _434deb98,
      name: "*"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
