<template>
    <div class="row mt-2">
        <VaccinatesVideoContent />
        <VaccinatesVideo videoUrl="https://www.youtube.com/embed/91ZLEkKNV2Q" />
    </div>
</template>

<script>
import VaccinatesVideoContent from './VaccinatesVideoContent'
import VaccinatesVideo from './VaccinatesVideo'

export default {
    name: "CheckVideo",
    components: {
        VaccinatesVideoContent,
        VaccinatesVideo
    }
}
</script>