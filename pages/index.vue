<template>
  <div class="">
    <hero></hero>
    <what></what>
    <why></why>
    <when></when>
    <register></register>
    <who></who>
  </div>
</template>

<script>
import Hero from '../components/hero.vue'
import What from '../components/what.vue'
import Why from '../components/why.vue'
import When from '../components/when.vue'
import Who from '../components/who.vue'
import Register from '../components/register.vue'

export default {
  components: {
    Hero,
    What,
    Why,
    When,
    Register,
    Who
  }
}
</script>

<style scoped>

</style>
