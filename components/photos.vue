<template lang="html">
  <section class="section">
    <br>
    <br>
    <div class="container">
      <div class="heading has-text-centered">
        <h1 class="title">ภาพบรรยากาศ</h1>
      </div>
      <br>
      <br>
      <div class="columns is-multiline">

        <div class="column is-4" v-for="picture in picturelists">
          <img :src="picture.img_src" alt="">
        </div>

      </div>
    </div>
    <br>
    <br>
  </section>
</template>

<script>
export default {
  data () {
    return {
      picturelists: [
        {
          img_src: 'photos/1.jpg',
        },
        {
          img_src: 'photos/2.jpg',
        },
        {
          img_src: 'photos/3.jpg',
        },
        {
          img_src: 'photos/4.jpg',
        },
        {
          img_src: 'photos/5.jpg',
        },
        {
          img_src: 'photos/6.jpg',
        },
        {
          img_src: 'photos/7.jpg',
        },
        {
          img_src: 'photos/8.jpg',
        },
        {
          img_src: 'photos/9.jpg',
        }
      ]
    }
  }
}
</script>

<style lang="css">
h1 {
  font-family:rsu-bold;
}
</style>
