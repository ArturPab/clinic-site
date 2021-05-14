<template>
    <p class="card-subtitle pb-4">{{jobPosition}}</p>
</template>

<script>
export default {
    name: "PersonJobPosition",
    props: {
        jobPosition: String
    }
}
</script>

<style scoped>
    .card-subtitle {
        font-size: 1.1rem;
        color: #008000;
        font-style: italic;
    }
</style>