<template>
  <div class="">
    <hero></hero>
    <what></what>
    <why></why>
    <when></when>
    <register></register>
    <who></who>
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

export default {
  components: {
    Hero,
    What,
    Why,
    When,
    Register,
    Who,
    FooterSection
  }
}
</script>

<style scoped>
</style>
