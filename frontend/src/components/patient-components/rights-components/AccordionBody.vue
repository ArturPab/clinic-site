<template>
    <div class="accordion-body" v-html="content">
    </div>
</template>

<script>
export default {
    name: 'AccordionBody',
    props: {
        content: String
    }
}
</script>

<style scoped>
    .accordion-body {
        color: var(--blue-5);
    }
</style>