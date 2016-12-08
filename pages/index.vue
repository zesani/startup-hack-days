<template>
  <div>
    <section class="app-header">
      <div id="app-header">
        <div class="container">
          <hgroup class="hero-body" id="site-description">
            <h1 class="title">Join The Elegant Themes Team</h1>
            <h2><strong>Build Beautiful Products That Power The Web </strong></h2>
            <a class="button is-large" href="#job_listings">View Open Positions</a>
          </hgroup>
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

    <section class="jobs-listing">
      <div class="container">
        <h2 class="has-text-centered">We're Hiring</h2>
        <div v-for="job in job_items">
          <div class="columns">
            <div class="column is-10">
              <article class="media job-listing">
                <div class="media-content">
                  <div class="level">
                    <div class="level-left">
                      <h3><strong>{{job.job_title}}</strong></h3> &nbsp;<small>{{job.job_place}}</small>
                    </div>
                  </div>
                  <p>{{job.job_description}}</p>
                </div>
              </article>
            </div>

            <div class="column is-2 has-text-centered">
              <router-link class="button is-primary" :to="job.href" :style="job.job_button_style">
                Learn More
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'app-body',
    data () {
      return {
        job_items: [
          {
            job_title: 'Product Designer',
            job_place: 'San Francisco / Remote',
            job_description: 'Put your passion for design to work in helping us build the most stunningly beautiful products on the WordPress market.',
            job_button_style: 'background-color: #9741da;',
            href: 'product-designer'
          },
          {
            job_title: 'WordPress Developer',
            job_place: 'San Francisco / Remote',
            job_description: 'We are looking for a WordPress guru to help us build some of the most widely-used WordPress products in the world.',
            job_button_style: 'background-color: #84cf2f;',
            href: 'wordpress-developer/'
          },
          {
            job_title: 'Affiliate Marketing Manager',
            job_place: 'San Francisco / Remote',
            job_description: 'Help us manage and grow one of the largest WordPress affiliate programs in the world with over 29,000 affiliates and millions in sales.',
            job_button_style: 'background-color: #57b0fc;',
            href: 'affiliate-marketing-manager/'
          },
          {
            job_title: 'Content Creator',
            job_place: 'San Francisco / Remote',
            job_description: 'Help us create content for one of the most popular WordPres blog on the internet and tutorials for a passionate community of designers.',
            job_button_style: 'background-color: #57b0fc;',
            href: 'content-creator/'
          },
          {
            job_title: 'Customer Support Specialist',
            job_place: 'San Francisco',
            job_description: 'Nothing is more important to us than making our customers happy. Help us support the most enthusiastic WordPress community on the web.',
            job_button_style: 'background-color: #57b0fc;',
            href: 'customer-support-specialist/'
          }
        ]
      }
    }
  }

</script>

<style scoped>
section {
  margin-bottom: 60px;
}
section.app-header div#app-header {
  background-color: #9238d8;
  background-size: cover;
  background-image: url(https://www.elegantthemes.com/careers/images/careers-hero-bg.jpg);
  padding: 150px 0;
}
section.app-header hgroup#site-description {
  letter-spacing: -1px;
  font-style: normal;
  color: white;
}
section.app-header hgroup#site-description h1 {
  font-size: 500%;
  color: white;
}
section.app-header hgroup#site-description h2 {
  font-size: 200%;
  padding: 25px 0;
  color: white;
}
section.app-header a.button {
  color: #9238d8;
}
section.app-header strong{
  color: white;
}

h2{
  font-size: 200%;
}
h3{
  font-size: 125%;
}

section.job-intro .container{
  /*margin-top: 150px;*/
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
  /*float: right;*/
  font-weight: 500;
  text-transform: uppercase;
  padding: 30px 20px 30px;
  border-radius: 3px;
  margin-top: 20px;
}
section.jobs-listing div.column.is-2{
  margin: auto;
  /*height: 50%;*/
}
</style>
