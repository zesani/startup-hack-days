<template lang="html">
  <section class="section is-background">
    <br>
    <br>
    <br>
    <br>
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="card">
            <img src="../static/designer.jpg" alt="">
            <div class="card-detail">
              <h1 class="title">Designer</h1>
              <h1>UX Designer, Graphic Designer</h1>
              <br>
              <!-- <a class="button is-danger" @click="openLink('Designer')" href="https://theinternship.typeform.com/to/aSKMo9">สมัครเลย</a> -->
              <a class="button is-danger">ปิดรับสมัครแล้ว</a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src="../static/dev.jpg" alt="">
            <div class="card-detail">
              <h1 class="title">Developer</h1>
              <h1>Programmer, Tester</h1>
              <br>
              <!-- <a class="button is-danger" @click="openLink('Developer')" href="https://theinternship.typeform.com/to/n65a98">สมัครเลย</a> -->
              <a class="button is-danger">ปิดรับสมัครแล้ว</a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src="../static/biz.jpg" alt="">
            <div class="card-detail">
              <h1 class="title">Business</h1>
              <h1>Marketing, Sale, Project Management</h1>
              <br>
              <!-- <a class="button is-danger" @click="openLink('Business')" href="https://theinternship.typeform.com/to/NUeVhb">สมัครเลย</a> -->
              <a class="button is-danger">ปิดรับสมัครแล้ว</a>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="has-text-centered">
        <!-- <h1 class="title color-white">* ผู้สมัครสามารถเลือกสมัครได้ 1 ตำแหน่งเท่านั้น มิเช่นนั้นจะถูกตัดสิทธิ์</h1> -->
      </div>

    </div>
    <br>
    <br>
    <br>
    <br>
  </section>
</template>

<script>
export default {
  methods: {
    openLink (lead) {
      if (process.BROWSER_BUILD && process.env.NODE_ENV === 'production') {
        fbq('track', 'Lead', {
          content_name: lead
        })
      }
    }
  }
}
</script>

<style lang="css">
.card {
  clear: both;
  height: 200px;
  display: block;
  background-color: #FFF;
  padding: 20px;
  border-radius: 5px;
}
.card h1 .title {
  /*color: #333 !important;*/
}
.card img {
  height: 160px;
  float: left;
  /*margin-right: 20px;*/
}
.card .card-detail {
  margin-left: 90px;
}
.card .card-detail a {
  position: absolute;
  bottom: 20px;
}
.is-background {
  background-color: #3A5FD7 !important;
}
.color-white {
  color: #FFF !important;
}
</style>
