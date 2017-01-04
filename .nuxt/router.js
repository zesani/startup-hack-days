'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _6e3c351c = process.BROWSER_BUILD ? () => System.import('/Users/n9ti/Working/theinternship.io/pages/index.vue') : require('/Users/n9ti/Working/theinternship.io/pages/index.vue')


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
      path: '/',
      component: _6e3c351c,
      name: 'index'
    },
    
    {
      path: '/index',
      component: _6e3c351c
    }
    
  ]
})
