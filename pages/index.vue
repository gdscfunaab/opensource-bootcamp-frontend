<template>
  
<div class="landing-page">
  <div><LandingPageHeader/>
  <LandingPageHero/></div>
  <div><LandingPageSearch/>
  <div><LandingPageJobcardy :jobs="jobs" :isLandingPage="true"/></div></div><br>
  <div class="adjust"><LandingPageDetail1/></div>
  <div class="detail"><LandingPageDetails2 /></div>
  <div class="foot"><LandingPageFooter/></div>
  <button class="back-to-top-hidden">Back To Top</button>

</div>
</template>
<style scoped>
.landing-page{
  width:100vw;
}
.back-to-top-hidden{
  display: viisible;
  position: fixed;
  bottom: 20px;
  right:20px;
  z-index: 99;
  border: none;
  background-color: hotpink;
  color: white;
  border-radius: 5px;
  padding: 15px;
}
.back-to-top-hidden:hover{
transform: translateY(-10);
animation:bounce .2.5s infinite;
}
@media screen and (max-width:600px) {
  .adjust {
    margin-top: 6000px;
  }  
  .detail{
    margin-top: 30px;
  }
  .foot{
    margin-top: 500px;
  }
}
@media screen and (min-width:600px) {
 .adjust{
   margin-top: 2400px;
 } 
}
</style>

<script>
export default {

  data() {
    return {
        jobs: [],
    };
  },
  mounted(){
      this.getJobs()
  },
  methods: {
    getJobs() {
        this.$toast.info('Loading jobs...')
      this.$store
        .dispatch("getJobsAction")
        .then((response) => {
          this.$toast.success("Job Fetch Successful");
          console.log(response);
          this.jobs = response.jobs
        })
        .catch((error) => {
          this.$toast.error(error);
        });
    },
  },
};
</script>

<style>

</style>

