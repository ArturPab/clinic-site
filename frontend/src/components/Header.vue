<template>
  <div class="header container-fluid p-0">
    <HeadingSection />
    <Navbar />
  </div>
</template>

<script>
import HeadingSection from "./header-components/HeadingSection"
import Navbar from "./header-components/Navbar"

export default {
  name: "Header",
  components: {
    HeadingSection,
    Navbar
  }
};
</script>

<!-- Ad
    HeadingSectiond "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    background-color: white;
    min-height: 130px;
  }
</style>
