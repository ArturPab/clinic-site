<template>
    <iframe class="col-12 col-lg-6 mb-1 mb-lg-0 mt-2 mt-lg-0" height="350px" :src="videoUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>

<script>
export default {
    name: "VaccinatesVideo",
    props: {
        videoUrl: String
    }
}
</script>