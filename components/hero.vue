<template lang="html">
  <section id="hero" class="hero is-primary is-fullheight">

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-mobile">
          <div class="column is-12-mobile is-12-tablet">
            <img @click="jump()" src="../static/hack-logo.png" alt="" class="hero-logo">
          </div>
        </div>
        <br><br><br>
        <h1 class="title">
          อย่ากลัว ถ้าคิดว่าเขียนโปรแกรมไม่เป็น<br>
ขอแค่มีความเชื่อแล้วก้าวเข้ามา เขียนเป็นแน่นอน
<!-- ี<br>ต่อการทำงานตลอดไป -->
        </h1>
        <br><br><br>
        <div @click="jump()">
          <i class="fa fa-angle-down down" aria-hidden="true"></i>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import smoothScroll from 'smoothscroll'

export default {
  methods: {
    jump () {
      if (process.BROWSER_BUILD) {
        var destination = document.querySelector('#section-what')
        smoothScroll(destination)
      }
    }
  }
}
</script>

<style lang="css" scoped>
h1.title {
  font-family: rsu-regular;
  color: black !important;
}
#hero.hero {
  background-color: #fff;
  /*background-size: cover;*/
  /*background-image: url('/Cover-pic.jpg');*/
  /*background: rgba(26,142,250,1);
  background: -moz-linear-gradient(-45deg, rgba(26,142,250,1) 0%, rgba(89,49,181,1) 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(26,142,250,1)), color-stop(100%, rgba(89,49,181,1)));
  background: -webkit-linear-gradient(-45deg, rgba(26,142,250,1) 0%, rgba(89,49,181,1) 100%);
  background: -o-linear-gradient(-45deg, rgba(26,142,250,1) 0%, rgba(89,49,181,1) 100%);
  background: -ms-linear-gradient(-45deg, rgba(26,142,250,1) 0%, rgba(89,49,181,1) 100%);
  background: linear-gradient(135deg, rgba(26,142,250,1) 0%, rgba(89,49,181,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1a8efa', endColorstr='#5931b5', GradientType=1 );*/
}
.hero-head .nav {
  min-height: 100px !important;
}
.hero-head .nav .nav-item img {
  max-height: 100px;
}
.hero-logo {
  /*height: 300px;*/
  width: 100%;
}
.down {
  font-size: 80px;
  text-shadow: 0px 1px 4px #444;
  cursor: pointer;
  animation: bounce 1s infinite alternate;
  -webkit-animation: bounce 1s infinite alternate;
}
@keyframes bounce {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-15px);
  }
}
@-webkit-keyframes bounce {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-15px);
  }
}
</style>
