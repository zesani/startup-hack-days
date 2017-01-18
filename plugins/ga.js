if (process.BROWSER_BUILD && process.env.NODE_ENV === 'production') {
  // Include Google Analytics
  /* eslint-disable */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  // Set the current page
  ga('create', 'UA-73797494-1', 'auto')
  ga('send', 'pageview')
  // When the app is mounted
  window.onNuxtReady((app) => {
    console.log('onNuxtReady')
    // And the route has changed
    app.$nuxt.$on('routeChanged', (to, from) => {
      // We tell Google Analytic to update the page
      console.log('routeChanged')
      ga('set', 'page', to.fullPath)
      ga('send', 'pageview')
    })
  })
  /* eslint-enable */
}
