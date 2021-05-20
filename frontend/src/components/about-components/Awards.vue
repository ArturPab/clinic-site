<template>
    <div class="container" id="nagrody">
        <div class="container my-5">
            <MainTitle title="Nagrody i wyróżnienia" />
            <LineAfterTitle />
        </div>
    </div>
    <div class="container py-2 mb-5 flex-d flex-column align-items-center">
        <Award :key="award.id" v-for="award in awards" :award="award"/>
    </div>

</template>

<script>
import MainTitle from '@/components/MainTitle'
import LineAfterTitle from '@/components/LineAfterTitle'
import Award from './Award'

export default {
    name: "Awards",
    components: {
        MainTitle,
        LineAfterTitle,
        Award
    },

    props: {
        awards: Array
    }
}
</script>