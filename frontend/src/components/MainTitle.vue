<template>
    <div class="row">
        <div class="col-lg-12">
            <h1 class="text-center fs-1">{{title}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainTitle",
    props: {
        title: String
    }
}
</script>