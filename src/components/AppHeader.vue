<template>
  <div id="app-header">
    <div class="container">
      <hgroup class="hero-body" id="site-description">
        <h1 class="title">Join The Elegant Themes Team</h1>
        <h2><strong>Build Beautiful Products That Power The Web </strong></h2>
        <a class="button is-large" href="#job_listings">View Open Positions</a>
      </hgroup>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-header'
  }
</script>

<style scoped>
div#app-header {
  background-color: #9238d8;
  background-size: cover;
  background-image: url(https://www.elegantthemes.com/careers/images/careers-hero-bg.jpg);
  padding: 150px 0;
}
hgroup#site-description {
  letter-spacing: -1px;
  font-style: normal;
  color: white;
}
hgroup#site-description h1 {
  font-size: 500%;
  color: white;
}
hgroup#site-description h2 {
  font-size: 200%;
  padding: 25px 0;
  color: white;
}
#app-header a.button {
  color: #9238d8;
}
strong{
  color: white;
}
</style>