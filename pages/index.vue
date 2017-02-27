<template>
  <div class="">
    <hero></hero>
    <what></what>
    <why></why>
    <when></when>
    <register></register>
    <who></who>
    <faq></faq>
    <photos></photos>

    <developer></developer>
    <designer></designer>
    <business></business>
    
    <footer-section></footer-section>
  </div>
</template>

<script>
import Hero from '../components/hero.vue'
import What from '../components/what.vue'
import Why from '../components/why.vue'
import When from '../components/when.vue'
import Who from '../components/who.vue'
import Register from '../components/register.vue'
import FooterSection from '../components/footer.vue'
import Faq from '../components/faq.vue'
import Photos from '../components/photos.vue'

import Developer from '../components/developer.vue'
import Designer from '../components/designer.vue'
import Business from '../components/business.vue'

export default {
  components: {
    Hero,
    What,
    Why,
    When,
    Register,
    Who,
    FooterSection,
    Faq,
    Photos,
    Developer,
    Designer,
    Business
  }
}
</script>

<style scoped>
@font-face {
    font-family: rsu-bold;
    src: url('../static/fonts/RSU-Bold.eot');
    src: url('../static/fonts/RSU-Bold.eot?#iefix') format('embedded-opentype'),
         url('../static/fonts/RSU-Bold.ttf') format('truetype'),
         url('../static/fonts/RSU-Bold.woff') format('woff'),
         url('../static/fonts/RSU-Bold.svg#rsu-bold') format('svg');
}
@font-face {
    font-family: rsu-regular;
    src: url('../static/fonts/RSU.eot');
    src: url('../static/fonts/RSU.eot?#iefix') format('embedded-opentype'),
         url('../static/fonts/RSU.woff') format('woff'),
         url('../static/fonts/RSU.ttf') format('truetype'),
         url('../static/fonts/RSU.svg#rsu-regular') format('svg');
}

</style>
