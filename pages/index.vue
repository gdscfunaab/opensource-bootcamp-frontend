<template>
  
<div class="landing-page">
  <div><LandingPageHeader/>
  <LandingPageHero/></div>
  <div><LandingPageSearch/>
  <div><LandingPageJobcardy :jobs="jobs" :isLandingPage="true"/></div></div><br>
  <div style="margin-top: 2400px"><LandingPageDetail1/>
  <LandingPageDetails2 />
  <LandingPageFooter/></div>
  
  
</div>
</template>


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

