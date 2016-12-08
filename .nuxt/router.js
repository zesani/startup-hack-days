'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _415c2632 = process.BROWSER_BUILD ? () => System.import('/Users/n9ti/Working/sellsuki-careers/pages/about.vue') : require('/Users/n9ti/Working/sellsuki-careers/pages/about.vue')

const _611400f7 = process.BROWSER_BUILD ? () => System.import('/Users/n9ti/Working/sellsuki-careers/pages/index.vue') : require('/Users/n9ti/Working/sellsuki-careers/pages/index.vue')


const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    // Scroll to the top by default
    let position = { x: 0, y: 0 }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}

export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'router-link-active',
  scrollBehavior,
  routes: [
    
    {
      path: '/about',
      component: _415c2632,
      name: 'about'
    },
    
    {
      path: '/',
      component: _611400f7,
      name: 'index'
    },
    
    {
      path: '/index',
      component: _611400f7
    }
    
  ]
})
