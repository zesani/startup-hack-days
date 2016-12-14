<template>
  <div>
    <section class="hero is-info is-fullheight">
      <div class="hero-body" id="app-header">
        <div class="container">
          <h1 class="title is-1">
            Join The Sellsuki Team
          </h1>
          <h2 class="subtitle is-3">
            Build Beautiful Products That Power The E-Commerce
          </h2>
          <a class="button is-large" @click="scrollTo()">View Open Positions</a>
        </div>
      </div>
    </section>

    <section class="job-intro">
      <div class="container">
        <div class="columns">
          <div class="column is-desktop">
            <h2 class="subtitle">Ready to Make An Impact On The Web?</h2>
            <p>Elegant Themes is a leader in WordPress Theme and Plugin Development.
              We have been building the top premium WordPress themes for the past 7 years,
              and we have one of the largest customer bases in the market.
              <strong style="color: #57b0fc;">371,133 customers</strong>
              depend on our beautiful designs, and we work hard every day to make sure we are creating the best themes and plugins around.
              We have a distributed team of 34, with headquarters in the heart of San Francisco.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-us">
      <div class="container">
        <div class="columns">
          <div class="column is-desktop">
            <strong>Our Mission</strong>
            <p>We hold elegance at our core, and rally behind a shared passion for simple,
            beautiful design. Elegant Themes isn't just a company, it's a community,
            and we cling to the community-centric values that have guided us over the past 8 years.
            We love WordPress, we love Open Source, and most of all we love building great things for our amazing customers.</p>
          </div>
          <div class="column is-desktop">
            <strong>Making an Impact</strong>
            <p>We build some of the most widely-used products in the WordPress ecosystem,
            impacting millions of websites around the world. According to BuiltWith,
            our flagship theme Divi is the second most popular theme in the world,
            second only to the default WordPress theme! The work we do has a huge footprint,
            making building each project incredibly rewarding.</p>
          </div>
          <div class="column is-desktop">
            <strong>Company Culture</strong>
            <p>Culture is an important part of our company, and we take pride in creating a working environment that is fun,
            challenging, rewarding and inspiring for everyone involved.
            We are a diverse group of people from around the world connected by a shared sense of purpose
            to create products that push the boundaries of WordPress.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="pictures">
      <div class="container">
        <div class="columns is-centered">
          <span class="" v-for="n in 3">
            <img class="column" :src="'https://www.elegantthemes.com/careers/images/careers-grid-img-'+n+'.jpg'" alt="about us">
          </span>
        </div>
        <div class="columns is-centered">
          <span class="" v-for="n in 2">
            <img class="column" :src="'https://www.elegantthemes.com/careers/images/careers-grid-img-'+(n+3)+'.jpg'" alt="about us">
          </span>
        </div>
      </div>
    </section>

    <JobListings></JobListings>

  </div>
</template>

<script>
  import JobListings from '~components/JobListings.vue'

  function scrollTo (element, to, duration) {
    if (duration <= 0) return
    var difference = to - element.scrollTop
    var perTick = difference / duration * 10

    setTimeout(function () {
      console.log(perTick)
      element.scrollTop = element.scrollTop + perTick
      if (element.scrollTop === to) return
      scrollTo(element, to, duration - 10)
    }, 10)
  }
  export default {
    name: 'app-body',
    components: {
      JobListings
    },
    methods: {
      scrollTo () {
        let elmnt = document.getElementById('job_listings')
        scrollTo(document.body, elmnt.offsetTop, 300)
      }
    },
    data () {
      return {
        scrollY: 0,
        targetPosition: {}
      }
    }
  }

</script>

<style>
body {
  overflow: hidden;
}
section .container{
  margin-bottom: 60px;
}
div#app-header {
  background-size: cover;
  background-image: url(https://www.elegantthemes.com/careers/images/careers-hero-bg.jpg);
}
section a.button {
  color: #9238d8;
}
section.job-intro {
  padding-top: 60px;
}
section.job-intro .container{
  color: #777777;
  font-weight: 100;
  padding: 30px;
}
section.job-intro p{
  font-size: 125%;
}
section.about-us .container{
  padding: 0 50px;
  text-align: left;
  color: #777777;
}

section.jobs-listing small {
  display: inline-block;
  color: #bbbbbb;
  font-style: italic;
}
section.jobs-listing div.columns{
  margin: 0 20px;
  border-bottom: 1px solid #dedede;
  padding-bottom: 30px;
}
section.jobs-listing p{
  font-weight: 100;
}
section.jobs-listing div.media-content{
  display: inline-block;
  padding: 25px 0 0;
}
section.jobs-listing a {
  font-weight: 500;
  text-transform: uppercase;
  padding: 30px 20px 30px;
  border-radius: 3px;
  margin-top: 20px;
}
section.jobs-listing div.column.is-2{
  margin: auto;
}

img.column {
  width: 100%;
}
</style>
