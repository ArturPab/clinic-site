<template>
    <div class="container mt-5 mb-3">
        <MainTitle title="Zapoznaj się z cyklem filmów" />
        <LineAfterTitle />
        <VaccinatesVideo  videoUrl="https://www.youtube.com/embed/3Fz4WBREZ60"/>
        <VaccinatesVideo  videoUrl="https://www.youtube.com/embed/dOltUoOLvk0" />
    </div>
</template>

<script>
import MainTitle from '@/components/MainTitle'
import LineAfterTitle from '@/components/LineAfterTitle'
import VaccinatesVideo from './VaccinatesVideo'

export default {
    name: "VaccinatesVideos",
    components: {
        LineAfterTitle,
        MainTitle,
        VaccinatesVideo
    }
}
</script>
