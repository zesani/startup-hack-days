<template lang="html">
  <section class="section">

    <div class="container">
      <div class="heading has-text-centered">
        <button @click="current = positions.developer">Developer</button>
        <button @click="current = positions.designer">Designer</button>
        <button @click="current = positions.business">Business</button>
        <hr>
        <h1 class="title">{{ current.name }}</h1>
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
                <th>เบอร์โทร</th>
                <th>เวลา</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(student, index) in list">
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.university }}</td>
                <td>{{ student.tel }}</td>
                <td>{{ getTime(index, 3) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
let moment = require('moment')
let json = require('../data/typeform-reader-final-export.json')

export default {
  name: 'teltototel',
  data () {
    return {
      positions: {
        developer: {
          name: 'Developer',
          key: 'n65a98'
        },
        designer: {
          name: 'Designer',
          key: 'aSKMo9'
        },
        business: {
          name: 'Business',
          key: 'NUeVhb'
        }
      },
      current: {
        name: 'Developer',
        key: 'n65a98'
      },
      all: json
    }
  },
  computed: {
    list () {
      return this.all[this.current.key]
    }
  },
  methods: {
    getTime (index, numberOfRooms) {
      let start = moment("900", "hmm").add(12 * Math.floor(index/numberOfRooms), 'm')
      let end = moment("900", "hmm").add(12 * (Math.floor(index/numberOfRooms) + 1), 'm')

      if (index >= 45) {
        start.add(60, 'm')
        end.add(60, 'm')
      }

      return start.format("HH:mm") + ' - ' + end.format("HH:mm")
    }
  }
}
</script>

<style lang="css">
</style>
