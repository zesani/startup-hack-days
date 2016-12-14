<template lang="html">
  <section id="job_listings" class="jobs-listing">
    <div class="container">
      <h2 class="has-text-centered">We're Hiring</h2>
      <div class="" v-for="team in teams">
        <br><br>
        <h1 class="has-text-centered title is-3">{{team.name}}</h1>
        <div v-for="job in team.jobLists">
          <div class="columns">
            <div class="column is-10">
              <article class="media job-listing">
                <div class="media-content">
                  <div class="level">
                    <div class="level-left">
                      <h3><strong>{{job.jobTitle}}</strong></h3> &nbsp;<small>{{job.jobPlace}}</small>
                    </div>
                  </div>
                  <p v-html="job.jobDescription"></p>
                  <br>
                  <span v-for="tag in job.tags">
                    <span class="tag is-dark" :class="tag.class">{{tag.name}}</span>&nbsp;
                  </span>
                </div>
              </article>
            </div>

            <div class="column is-2 has-text-centered">
              <router-link class="button is-primary" :to="job.href" :style="job.jobButtonStyle">
                Learn More
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JobListings',
  data () {
    return {
      teams: [
        {
          name: 'Dev Team',
          jobLists: [
            {
              jobTitle: 'Product Designer',
              jobPlace: 'Bangkok',
              jobDescription: `Put your passion for design to work in helping us build the most
                              <br>
                              stunningly beautiful <br>products on <br>the WordPress <br>market.`,
              jobButtonStyle: 'background-color: #9741da;',
              href: 'product-designer',
              tags: [
                {
                  name: 'Vue.js', class: 'is-dark'
                },
                {
                  name: 'Angular.js', class: 'is-success'
                }
              ]
            },
            {
              jobTitle: 'WordPress Developer',
              jobPlace: 'Bangkok',
              jobDescription: 'We are looking for a WordPress guru to help us build some of the most widely-used WordPress products in the world.',
              jobButtonStyle: 'background-color: #84cf2f;',
              href: 'wordpress-developer/',
              tags: [
                {
                  name: 'Vue.js', class: 'is-dark'
                },
                {
                  name: 'Angular.js', class: 'is-success'
                }
              ]
            },
            {
              jobTitle: 'Affiliate Marketing Manager',
              jobPlace: 'Bangkok',
              jobDescription: 'Help us manage and grow one of the largest WordPress affiliate programs in the world with over 29,000 affiliates and millions in sales.',
              jobButtonStyle: 'background-color: #57b0fc;',
              href: 'affiliate-marketing-manager/',
              tags: [
                {
                  name: 'Vue.js', class: 'is-dark'
                },
                {
                  name: 'Angular.js', class: 'is-success'
                }
              ]
            }
          ]
        },
        {
          name: 'Product Team',
          jobLists: [
            {
              jobTitle: 'Content Creator',
              jobPlace: 'Bangkok',
              jobDescription: 'Help us create content for one of the most popular WordPres blog on the internet and tutorials for a passionate community of designers.',
              jobButtonStyle: 'background-color: #57b0fc;',
              href: 'content-creator/',
              tags: [
                {
                  name: 'Vue.js', class: 'is-dark'
                },
                {
                  name: 'Angular.js', class: 'is-success'
                }
              ]
            },
            {
              jobTitle: 'Customer Support Specialist',
              jobPlace: 'Bangkok',
              jobDescription: 'Nothing is more important to us than making our customers happy. Help us support the most enthusiastic WordPress community on the web.',
              jobButtonStyle: 'background-color: #57b0fc;',
              href: 'customer-support-specialist/',
              tags: [
                {
                  name: 'Vue.js', class: 'is-dark'
                },
                {
                  name: 'Angular.js', class: 'is-success'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
