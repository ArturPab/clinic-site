<template>
    <div class="container" id="zarzad">
        <div class="container my-5">
            <MainTitle title="Zarząd PLMRiS" />
            <LineAfterTitle />
        </div>
    </div>
    <PersonCard :key="person.id" v-for="person in management" :person="person"/>
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

  props: {
    management: Array
  }

}
</script>