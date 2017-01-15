<template lang="html">
  <section class="section is-background">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="card">
            <img src="../static/designer.jpg" alt="">
            <h1 class="title">Designer</h1>
            <h1>UX Designer, Graphic Designer</h1>
            <br>
            <a class="button is-danger">สมัครเลย</a>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src="../static/dev.jpg" alt="">
            <h1 class="title">Developer</h1>
            <h1>Programmer, Tester</h1>
            <br>
            <a class="button is-danger">สมัครเลย</a>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src="../static/biz.jpg" alt="">
            <h1 class="title">Business</h1>
            <h1>Marketing, Sale, Project Management</h1>
            <br>
            <a class="button is-danger">สมัครเลย</a>
          </div>
        </div>
      </div>
      <br>
      <div class="has-text-centered">
        <h1 class="title color-white">* ผู้สมัครสามารถเลือกสมัครได้ 1 ตำแหน่งเท่านั้น มิเช่นนั้นจะถูกตัดสิทธิ์</h1>
      </div>

    </div>

  </section>
</template>

<script>
export default {
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
  margin-right: 20px;
}
.is-background {
  background-color: #333B4A !important;
}
.color-white {
  color: #FFF !important;
}
</style>
