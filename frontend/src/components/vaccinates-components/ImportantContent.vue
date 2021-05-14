<template>
    <div class="row my-2">
            <div class="col-12 fw-bold">
                {{content}}
            </div>
        </div>
</template>

<script>
export default {
    name: "ImportantContent",
    props: {
        content: String
    }
}
</script>