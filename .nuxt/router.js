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
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.scrollToTop || (r.components.default.options && r.components.default.options.scrollToTop))) {
      position = { x: 0, y: 0 }
    }
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
  linkActiveClass: 'nuxt-link-active',
  scrollBehavior,
  routes: [
		{
			path: "/",
			component: _6e3c351c,
			name: "index"
		}
  ]
})
