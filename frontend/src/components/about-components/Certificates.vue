<template>
    <div class="container" id="certyfikaty">
        <div class="container my-5">
            <MainTitle title="Certyfikaty" />
            <LineAfterTitle />
        </div>
    </div>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="row d-flex flex-md-row flex-column  justify-content-xxl-between justify-content-xl-evenly justify-content-center">
            <Certificate :key="certificate.id" v-for="certificate in certificates" :certificate="certificate" />
        </div>
    </div>

</template>

<script>
import MainTitle from '@/components/MainTitle'
import LineAfterTitle from '@/components/LineAfterTitle'
import Certificate from './Certificate'

export default {
    name: "Certificates",
    components: {
        MainTitle,
        LineAfterTitle,
        Certificate,
    },

    props: {
        certificates: Array
    },

}
</script>