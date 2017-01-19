<template lang="html">
  <section id="hero" class="hero is-primary is-fullheight">

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <img src="../static/theinternship-logo.png" alt="" class="hero-logo">
        <br><br><br>
        <h1 class="title">
          โอกาสหนึ่งครั้งของการฝึกงานต้องให้ประสบการณ์ที่ดี<br>ต่อการทำงานตลอดไป
        </h1>
        <!-- <h2 class="subtitle">
          Subtitle
        </h2> -->
      </div>
    </div>

  </section>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

h1.title {
  font-family: rsu-regular;
}
#hero.hero {
  /*background-size: cover;*/
  /*background-image: url('/Cover-pic.jpg');*/
  background: rgba(26,142,250,1);
  background: -moz-linear-gradient(-45deg, rgba(26,142,250,1) 0%, rgba(89,49,181,1) 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(26,142,250,1)), color-stop(100%, rgba(89,49,181,1)));
  background: -webkit-linear-gradient(-45deg, rgba(26,142,250,1) 0%, rgba(89,49,181,1) 100%);
  background: -o-linear-gradient(-45deg, rgba(26,142,250,1) 0%, rgba(89,49,181,1) 100%);
  background: -ms-linear-gradient(-45deg, rgba(26,142,250,1) 0%, rgba(89,49,181,1) 100%);
  background: linear-gradient(135deg, rgba(26,142,250,1) 0%, rgba(89,49,181,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1a8efa', endColorstr='#5931b5', GradientType=1 );
}
.hero-head .nav {
  min-height: 100px !important;
}
.hero-head .nav .nav-item img {
  max-height: 100px;
}
.hero-logo {
  height: 300px;
}
</style>
