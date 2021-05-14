<template>
    <div class="container" id="zarzad">
        <div class="container my-5">
            <MainTitle title="Zarząd PLMRiS" />
            <LineAfterTitle />
        </div>
    </div>
    <PersonCard :key="person.id" v-for="person in this.management" :person="person"/>
</template>

<script>
import MainTitle from '@/components/MainTitle'
import LineAfterTitle from '@/components/LineAfterTitle'
import PersonCard from '@/components/about-components/PersonCard'


export default {
    name: "Management",
    components: {
    MainTitle,
    LineAfterTitle,
    PersonCard
  },

  data() {
    return {
      management: []
    }
  },

  created() {
    this.management = [
      {
        id: 1,
        imageUrl: "artur.jpg",
        fullName: "Artur Pabjan",
        jobPosition: "Lekarz medycyny, dyrektor",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ]
  }
}
</script>