'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _8f68f018 = process.BROWSER_BUILD ? () => System.import('C:\\Users\\fang\\Desktop\\Intern Project\\internship.io\\pages\\index.vue') : require('C:\\Users\\fang\\Desktop\\Intern Project\\internship.io\\pages\\index.vue')


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
      component: _8f68f018,
      name: 'index'
    },
    
    {
      path: '/index',
      component: _8f68f018
    }
    
  ]
})
