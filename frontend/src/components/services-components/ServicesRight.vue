<template>
    <div class="col-xl-9 col-lg-8" style="padding-left: 3rem;">
        <MainTitle :title="title" />
        <LineAfterTitle />
        <ServiceContent :content="content" />
    </div>
</template>

<script>
import MainTitle from '@/components/MainTitle'
import LineAfterTitle from '@/components/LineAfterTitle'
import ServiceContent from '@/components/services-components/ServiceContent'

export default {
    name: "ServicesRight",
    props: {
        title: String,
        content: String
    },
    components: {
        MainTitle,
        LineAfterTitle,
        ServiceContent
    }
}
</script>