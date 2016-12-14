module.exports = {
  head: {
    title: 'Careers | Sellsuki',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', content: 'Careers at Sellsuki' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: '~assets/bulma.css', lang: 'css' }
  ],
  router: {
    routes: [
      { path: '/index', component: 'pages/index' }
    ]
  }
}
