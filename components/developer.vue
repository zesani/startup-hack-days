<template lang="html">
  <section class="section">

    <div class="container">
      <div class="heading has-text-centered">
        <h1 class="title is-1">ประกาศผล</h1>
        <h1 class="title">Developer</h1>
      </div>
      <br>
      <br>
      <div class="columns">
        <div class="column is-12">
          <table class="table">
            <thead>
              <tr>
                <th>id</th>
                <th>ชื่อ</th>
                <th>มหาวิทยาลัย</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="student in list">
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.university }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
let json = require('../data/typeform-reader-final-export.json');
export default {
  name: 'developer',
  data () {
    return {
      list: json.n65a98
    }
  }
}
</script>

<style lang="css">
</style>
