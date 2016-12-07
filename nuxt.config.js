module.exports = {
  head: {
    title: 'sellsuki-careers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "some Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://cdn.elegantthemes.com/favicon.ico' }
    ]
  },
  css: [
    { src: '~assets/bulma.css', lang: 'css'}
  ],
  router: {
    routes: [
      { path: '/index', component: 'pages/index' }
    ]
  }
}
