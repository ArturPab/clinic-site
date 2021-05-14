<template>
    <div class="col-md-6">
        <div class="card-body">
            <h3 class="card-title mb-4">{{name}}</h3>
            <p class="card-text fs-6">{{content}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "AwardCardBody",
    props: {
        name: String,
        content: String,
    }
}
</script>