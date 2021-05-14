<template>
    <a :href="button.buttonLink" :class="button.buttonClass" role="button" data-bs-toggle="button">{{button.buttonText}}</a>
</template>

<script>
export default {
    name: "Button",
    props: {
        button: Object
    },
}
</script>

<style scoped>
    .contact-number {
    border-radius: 1rem;
    }
</style>