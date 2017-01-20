module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'The Internship 2017',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#29211F' },
      { hid: 'description', content: "The Internship 2017" },
      { property: 'og:url', content: 'http://www.theinternship.io' },
      { property: 'og:title', content: 'The Internship Program ที่สุดของประสบการณ์ฝึกงานกับ Startup' },
      { property: 'og:image', content: 'http://www.theinternship.io/og.jpg' },
      { property: 'og:description', content: 'The Internship Program โครงการที่เปิดโอกาสให้นักศึกษา ได้มีโอกาสฝึกงานกับ Tech Startup ชั้นแนวหน้าของไทย ไม่ว่าจะเป็น Developer, Designer หรือ Business เปิดรับสมัคร วันนี้ - 15 กุมพาพันธ์ 2560' },
      { property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' }
    ],
    script: [
      { type: 'text/javascript', src: '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-587cfe06623014f7' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    '~plugins/ga.js',
    '~plugins/hotjar.js'
  ]
}
