<template>
    <div class="card mb-5 border-3 border-0 border-bottom" style="max-width: 1600px;">
        <div class="row g-0">
            <AwardCardImage :path="award.imageUrl" :name="award.name" />
            <AwardCardBody :name="award.name" :content="award.content" />
        </div>
    </div>
</template>

<script>
import AwardCardBody from './AwardCardBody'
import AwardCardImage from './AwardCardImage'

export default {
    name: "Award",
    props: {
        award: Object
    },
    components: {
        AwardCardBody,
        AwardCardImage
    }
}
</script>