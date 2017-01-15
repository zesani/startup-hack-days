<template lang="html">
  <section id="hero" class="hero is-success is-fullheight">
    <!-- Hero header: will stick at the top -->
    <!-- <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item">
              <img src="../static/the-internship-logo-final-3.png" alt="Logo">
            </a>
          </div>
          <div class="nav-right nav-menu">
            <a class="nav-item is-active">
              คืออะไร
            </a>
            <a class="nav-item">
              ทำไมควรมา
            </a>
            <a class="nav-item">
              เมื่อไหร่
            </a>
            <a class="nav-item">
              ใครมาบ้าง
            </a>
            <span class="nav-item">
              <a class="button is-success is-inverted">
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </header>
    </div> -->

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <img src="../static/intern-logo.png" alt="" class="hero-logo">
        <br><br><br>
        <h1 class="title">
          โอกาสหนึ่งครั้งของการฝึกงาน ต้องให้ประสบการณ์ที่ดีต่อการทำงานตลอดไป
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

<style lang="css">
#hero.hero {
  background-size: cover;
  background-image: url('/bg.jpg');
}
.hero-head .nav {
  min-height: 100px !important;
}
.hero-head .nav .nav-item img {
    max-height: 100px;
}
.hero-logo {
  height: 200px;
}
</style>
