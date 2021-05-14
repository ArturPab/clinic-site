<template>
      <div class="container my-5">
        <MainTitle title="Nasza misja" />
        <LineAfterTitle />
      </div>
      <HomeContent />
</template>

<script>
// @ is an alias to /src
import MainTitle from '@/components/MainTitle'
import LineAfterTitle from '@/components/LineAfterTitle'
import HomeContent from '@/components/home-components/HomeContent'

export default {
  name: "Home",
  components: {
    MainTitle,
    LineAfterTitle,
    HomeContent
  }
};
</script>


<style scoped>

</style>