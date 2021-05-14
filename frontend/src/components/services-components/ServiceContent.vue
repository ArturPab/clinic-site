<template>
    <div class="row mt-3">
        <div class="col-12">
            <p class="fs-5 text-justify" style="color:#555">
                {{content}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServiceContent',
    props: {
        content: String
    }
}
</script>