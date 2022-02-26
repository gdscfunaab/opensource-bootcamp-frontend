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
          <img :src="job.company_logo" alt="company" width="50px"/>
        </div> 
        <div class="company_name">
          <p>{{ job.company_name }}</p>
        </div>
        <div class="descrip-apply">
        <button> <nuxt-link to="/login" v-if="isLandingPage">Apply Now</nuxt-link>
          <a target="_blank" :href="job.url" v-else>Apply Now</a></button>
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
  grid-template-columns: auto auto auto;
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
  height: 80px;
  font-family: monospace;
  font-size: 40px;
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
  border: none;
  margin-bottom: 70px;
}
.descrip-remote,
.location,
.descrip-remote2 {
  font-family: monospace;
  font-size: 20px;
  color: rgb(194, 192, 192);
  height: 18px;
  border: none;
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
  border: none;
}
.logo,
.logo2,
.logo3 {
  height: 50px;
  margin-top: 18px;
  border: none;
}
.company_name,
.company_name1,
.company_name2 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  word-spacing: -4px;
  border: none;
  height: 40px;
}
.descrip-apply{
border: none;
height: 45px;
box-shadow: 1px 1.5px 2px 2px rgb(247, 244, 244);
}
button {
  width: 300px;
  height: 45px;
  background-color: rgb(13, 187, 7);
  border: none;
}
button a{
  text-decoration: none;
  color: white;
  font-family: monospace;
  font-size: 15px;
  padding: 100px;
}
</style>