<template>
  <div class="dashboard">
    <DashboardheaderHeader />
    <p><b>Welcome, FrontEnd Devs</b></p>
    <LandingPageJobcardy :jobs="jobs"/>
  </div>
</template>

<script>
export default {
  middleware: ["auth"],
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

<style scoped>
p {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(67, 189, 138);
  position: relative;
  left: 30px;
  font-size: 25px;
}
</style>