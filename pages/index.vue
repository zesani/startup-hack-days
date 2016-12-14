<template>
  <div>
    <section class="hero is-info is-fullheight">
      <div class="hero-body" id="app-header">
        <div class="container">
          <h1 class="title is-1">
            Join The Sellsuki Team
          </h1>
          <h2 class="subtitle is-3">
            Build Beautiful Products That Power The E-Commerce
          </h2>
          <a class="button is-large" @click="scrollTo()">View Open Positions</a>
        </div>
      </div>
    </section>

    <section class="job-intro">
      <div class="container">
        <div class="columns">
          <div class="column is-desktop">
            <h2 class="subtitle">Ready to Make An Impact On The E-Commerce?</h2>
            <p>Soft kitty warm kitty little ball of furr my left donut is missing, as is my right but leave hair everywhere. Purr howl uncontrollably for no reason so purr, yet groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked! who's the baby, for wake up human for food at 4am. Eats owners hair then claws head spend all night ensuring people don't sleep sleep all day. Kitten is playing with dead mouse see owner, run in terror dream about hunting birds yet playing with balls of wool chase mice licks your face. Meow knock over christmas tree tuxedo cats always looking dapper or hide when guests come over play time. Stand in front of the computer screen lick sellotape. Cat is love, cat is life cat is love, cat is life, sit on the laptop pee in human's bed until he cleans the litter box.
              <strong style="color: #57b0fc;">371,133 customers</strong>
              a bird! yum make muffins purr while eating. Present belly, scratch hand when stroked intently stare at the same spot put butt in owner's face milk the cow.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-us">
      <div class="container">
        <div class="columns">
          <div class="column is-desktop">
            <strong>Our Mission</strong>
            <p>
              Tuxedo cats always looking dapper refuse to leave cardboard box cat is love, cat is life asdflkjaertvlkjasntvkjn (sits on keyboard). Cats go for world domination. Jump off balcony, onto stranger's head. Have my breakfast spaghetti yarn paw at your fat belly, but i like big cats and i can not lie, for curl up and sleep on the freshly laundered towels sit on the laptop or use lap as chair who's the baby. Jump around on couch, meow constantly until given food.
            </p>
          </div>
          <div class="column is-desktop">
            <strong>Making an Impact</strong>
            <p>
              Kitty scratches couch bad kitty. Knock over christmas tree poop on grasses or scratch the box so paw at your fat belly touch water with paw then recoil in horror. Kitten is playing with dead mouse stares at human while pushing stuff off a table or get video posted to internet for chasing red dot my slave human didn't give me any food so i pooped on the floor so fall asleep on the washing machine so pushes butt to face spend all night ensuring people don't sleep sleep all day.
            </p>
          </div>
          <div class="column is-desktop">
            <strong>Company Culture</strong>
            <p>
              Mrow burrow under covers, but toy mouse squeak roll over going to catch the red dot today going to catch the red dot today and man running from cops stops to pet cats, goes to jail please stop looking at your phone and pet me drink water out of the faucet. Get video posted to internet for chasing red dot howl on top of tall thing and licks paws bleghbleghvomit my furball really tie the room together. Cat slap dog in face human give me attention meow but Gate keepers of hell. 
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="pictures">
      <div class="container">
        <div class="columns is-centered">
          <span class="" v-for="n in 3">
            <img class="column" :src="'https://www.elegantthemes.com/careers/images/careers-grid-img-'+n+'.jpg'" alt="about us">
          </span>
        </div>
        <div class="columns is-centered">
          <span class="" v-for="n in 2">
            <img class="column" :src="'https://www.elegantthemes.com/careers/images/careers-grid-img-'+(n+3)+'.jpg'" alt="about us">
          </span>
        </div>
      </div>
    </section>

    <section class="pictures">
      <div class="container">
        <div class="columns is-centered">
          <span class="" v-for="n in 3">
            <img class="column" :src="'https://www.elegantthemes.com/careers/images/careers-grid-img-' + n + '.jpg'" alt="about us">
          </span>
        </div>
        <div class="columns is-centered">
          <span class="" v-for="n in 2">
            <img class="column" :src="'https://www.elegantthemes.com/careers/images/careers-grid-img-'+(n+3)+'.jpg'" alt="about us">
          </span>
        </div>
      </div>
    </section>

    <JobListings></JobListings>

    <section class="has-text-centered">
      <a href="http://www.sellsuki.co.th">www.sellsuki.co.th</a>
      <br><br><br><br>
    </section>

    </div>

  </div>
</template>

<script>
  import JobListings from '~components/JobListings.vue'

  function scrollTo (element, to, duration) {
    if (duration <= 0) return
    var difference = to - element.scrollTop
    var perTick = difference / duration * 10

    setTimeout(function () {
      console.log(perTick)
      element.scrollTop = element.scrollTop + perTick
      if (element.scrollTop === to) return
      scrollTo(element, to, duration - 10)
    }, 10)
  }
  export default {
    name: 'app-body',
    components: {
      JobListings
    },
    methods: {
      scrollTo () {
        let elmnt = document.getElementById('job_listings')
        scrollTo(document.body, elmnt.offsetTop, 300)
      }
    },
    data () {
      return {
        scrollY: 0,
        targetPosition: {}
      }
    }
  }

</script>

<style>
body {
  overflow: hidden;
}
section .container{
  margin-bottom: 60px;
}
div#app-header {
  background-size: cover;
  background-image: url(https://www.elegantthemes.com/careers/images/careers-hero-bg.jpg);
}
section a.button {
  color: #9238d8;
}
section.job-intro {
  padding-top: 60px;
}
section.job-intro .container{
  color: #777777;
  font-weight: 100;
  padding: 30px;
}
section.job-intro p{
  font-size: 125%;
}
section.about-us .container{
  padding: 0 50px;
  text-align: left;
  color: #777777;
}

section.jobs-listing small {
  display: inline-block;
  color: #bbbbbb;
  font-style: italic;
}
section.jobs-listing div.columns{
  margin: 0 20px;
  border-bottom: 1px solid #dedede;
  padding-bottom: 30px;
}
section.jobs-listing p{
  font-weight: 100;
}
section.jobs-listing div.media-content{
  display: inline-block;
  padding: 25px 0 0;
}
section.jobs-listing a {
  font-weight: 500;
  text-transform: uppercase;
  padding: 30px 20px 30px;
  border-radius: 3px;
  margin-top: 20px;
}
section.jobs-listing div.column.is-2{
  margin: auto;
}

img.column {
  width: 100%;
}
</style>
