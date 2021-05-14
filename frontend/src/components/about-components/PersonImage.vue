<template>
    <div class="col-md-4">
        <img :src="require(`@/static/${imgSrc}`)" :alt="altName">
    </div>
</template>

<script>

export default {
    name: "PersonImage",
    props: {
        imgSrc: String,
        altName: String
    },
}
</script>

<style scoped>
    img {
        width: 100%; 
        object-fit: cover;
    }
</style>