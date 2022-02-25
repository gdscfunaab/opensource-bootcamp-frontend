<template>
  <div class="over">
    <div class="job">
      <h1>Latest Job</h1>
    </div>
    <div class="details-comp">
      <div class="first-grid" v-for="job in jobs" :key="job.id">
        <div class="descrip">
          <h2>{{ job.title }}</h2>
        </div>
        <div class="descrip-remote">
          <p>Remote</p>
        </div>
        <div class="time">
          <p>
            {{
              job.publication_date
                ? new Date(job.publication_date).toDateString()
                : "No Date"
            }}
          </p>
        </div>
        <div class="logo">
          <img :src="job.company_logo" alt="company" />
        </div>
        <div class="company_name">
          <p>{{ job.company_name }}</p>
        </div>
        <div class="descrip-apply">
          <nuxt-link to="/login" v-if="isLandingPage">Apply Now</nuxt-link>
          <a target="_blank" :href="job.url" v-else>Apply Now</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    jobs: {
      type: Array,
      required: true,
    },
    isLandingPage: {
      type: Boolean,
    },
  },
};
</script>
<style scoped>
.over {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto auto;
  border: none;
  height: 500px;
  width: 100;
}
h1 {
  font-family: monospace;
  font-size: 30px;
  padding: 30px 50px;
}
.job {
  border: none;
  width: 200px;
  height: 70px;
  font-family: monospace;
  font-size: 15px;
  margin: 0 0 20px 0;
  padding: 0;
}
.details-comp {
  display: grid;
  grid-template-columns: auto auto auto;
  border: none;
  height: 400px;
  width: 72rem;
  margin-top: 100px;
}
.first-grid {
  display: grid;
  grid-template-rows: auto auto auto auto auto auto;
  border: none;
  width: 300px;
  height: 370px;
  padding: 10px;
  box-shadow: 1px 1.5px 2px 2px rgb(226, 225, 235);
}
.second-grid {
  display: grid;
  grid-template-rows: auto auto auto auto auto auto;
  border: none;
  width: 300px;
  height: 370px;
  padding: 10px;
  box-shadow: 1px 3px 6px 2px rgb(226, 225, 235);
}
.third-grid {
  display: grid;
  grid-template-rows: auto auto auto auto auto auto;
  border: none;
  width: 300px;
  height: 370px;
  padding: 10px;
  box-shadow: 1px 1.5px 2px 2px rgb(226, 225, 235);
}
.descrip,
.dev,
.descrip2 {
  font-family: monospace;
}
.descrip-remote,
.location,
.descrip-remote2 {
  font-family: monospace;
  font-size: 20px;
  color: rgb(194, 192, 192);
  height: 18px;
}
.location {
  height: 40px;
}
.time,
.time-posted,
.time2 {
  font-family: monospace;
  color: hotpink;
  font-weight: bold;
  font-size: 20px;
  word-spacing: -8px;
}
.logo,
.logo2,
.logo3 {
  height: 5px;
  margin-top: 18px;
}
.company_name,
.company_name1,
.company_name2 {
  font-family: monospace;
  font-size: 20px;
  word-spacing: -4px;
}
button {
  width: 300px;
  height: 45px;
  font-family: monospace;
  font-size: 15px;
  color: white;
  background-color: rgb(13, 187, 7);
  border: none;
  box-shadow: 1px 1.5px 2px 2px rgb(247, 244, 244);
}
</style>