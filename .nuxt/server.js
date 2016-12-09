'use strict'

const debug = require('debug')('nuxt:render')
import Vue from 'vue'
import { stringify } from 'querystring'
import { omit } from 'lodash'
import { app, router } from './index'
import { getMatchedComponents, getContext, promisify, urlJoin } from './utils'

const isDev = false
const _app = new Vue(app)

// Fix issue from vue-router Abstract mode with base (used for server-side rendering)


// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
export default context => {
  // Add store to the context
  
  // Nuxt object
  context.nuxt = { data: [], error: null, serverRendered: true }
  // create context.next for simulate next() of beforeEach() when wanted to redirect
  context.redirected = false
  context.next = function (opts) {
    if (!context.res) {
      context.redirected = opts
      context.nuxt.serverRendered = false
      return
    }
    opts.query = stringify(opts.query)
    opts.path = opts.path + (opts.query ? '?' + opts.query : '')
    opts.path = urlJoin('/', opts.path)
    context.res.writeHead(opts.status, {
      'Location': opts.path
    })
    context.res.end()
  }
  // set router's location
  router.push(context.url)
  // Add route to the context
  context.route = router.currentRoute
  // Add meta infos
  context.meta = _app.$meta()
  // Error function
  context.error = _app.$options._nuxt.error.bind(_app)

  
  let Components = getMatchedComponents(context.route)
  
    let promise = Promise.resolve()
  
  return promise
  .then(() => {
    // Call data & fetch hooks on components matched by the route.
    return Promise.all(Components.map((Component) => {
      let promises = []
      if (!Component.options) {
        Component = Vue.extend(Component)
        Component._Ctor = Component
      } else {
        Component._Ctor = Component
        Component.extendOptions = Component.options
      }
      const ctx = getContext(context)
      if (Component.options.data && typeof Component.options.data === 'function') {
        Component._data = Component.options.data
        let promise = promisify(Component._data, ctx)
        promise.then((data) => {
          Component.options.data = () => data
          Component._Ctor.options.data = Component.options.data
        })
        promises.push(promise)
      } else {
        promises.push(null)
      }
      if (Component.options.fetch) {
        promises.push(Component.options.fetch(ctx))
      }
      return Promise.all(promises)
    }))
  })
  .then((res) => {
    if (!Components.length) {
      context.nuxt.error = context.error({ statusCode: 404, message: 'This page could not be found.', url: context.route.path })
      
      return _app
    }
    
    // datas are the first row of each
    context.nuxt.data = res.map((tab) => tab[0])
    context.nuxt.error = _app.$options._nuxt.err
    
    
    return _app
  })
  .catch(function (error) {
    context.nuxt.error = context.error(error)
    
    return _app
  })
}
