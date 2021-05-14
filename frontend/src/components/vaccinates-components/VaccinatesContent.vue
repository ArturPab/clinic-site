<template>
    <div class="row mt-2">
        <div class="col-12 d-flex">
            <div class="me-2">
                <i class="fas fa-chevron-right"></i>
            </div>
            <span v-html="content">
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "VaccinatesContent",
    props: {
        content: String
    }
}
</script>