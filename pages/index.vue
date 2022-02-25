<template>
  
<div class="landing-page">
  <LandingPageHeader/>
  <LandingPageHero/>
  <LandingPageSearch/>
  <LandingPageJobcardy :jobs="jobs" :isLandingPage="true"/>
  <LandingPageDetail1/>
  <LandingPageDetails2 />
  <LandingPageFooter/>
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
