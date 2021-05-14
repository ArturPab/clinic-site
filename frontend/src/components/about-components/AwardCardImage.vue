<template>
    <div class="col-md-6 d-flex justify-content-center justify-content-md-start">
        <img :src="require(`@/static/${path}`)" :alt="name" style="width: 93%; height: 90%; object-fit: cover; @media(min-width: 768px){width:90%;}">
    </div>
</template>

<script>
export default {
    name: "AwardCardImage",
    props: {
        path: String,
        name: String
    }
}
</script>