<template lang="html">
  <section class="section">

    <div class="container">
      <div class="heading has-text-centered">
        <h1 class="title">Designer</h1>
        <p>กำหนดการสอบสัมภาษณ์ วันที่ 4 มี.ค. 2560</p>
        <p>ให้ผู้ผ่านเข้ารอบมาถึงสถานที่ก่อนเวลาที่กำหนดอย่างน้อย 30 นาที</p>
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
                <th>เวลา</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(student, index) in list">
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.university }}</td>
                <td>{{ getTime(index) }}</td>
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
let room = 2

export default {
  name: 'designer',
  data () {
    return {
      list: json.aSKMo9
    }
  },
  methods: {
    getTime (index) {
      let start = moment("900", "hmm").add(12 * Math.floor(index/room), 'm')
      let end = moment("900", "hmm").add(12 * (Math.floor(index/room) + 1), 'm')

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
