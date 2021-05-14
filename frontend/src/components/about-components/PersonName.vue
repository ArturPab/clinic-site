<template>
    <h3 class="card-title">{{fullName}}</h3>
</template>

<script>
export default {
    name: "PersonName",
    props: {
        fullName: String
    }
}
</script>