module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'The Internship 2017',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "The Internship 2017" },
      { property: 'og:url', content: 'http://www.theinternship.io.s3-website-ap-southeast-1.amazonaws.com' },
      { property: 'og:title', content: 'The Internship 2017' },
      { property: 'og:image', content: 'http://www.theinternship.io.s3-website-ap-southeast-1.amazonaws.com/og.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' }
}
