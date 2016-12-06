<template>
  <div id="app">
    <app-header></app-header>
    <app-body></app-body>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppBody from './components/AppBody'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppBody
  }
}
</script>

<style>

#app {
  font-family: Helvetica, 'Avenir', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
