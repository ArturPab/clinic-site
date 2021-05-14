<template>
    <div class="container" id="certyfikaty">
        <div class="container my-5">
            <MainTitle title="Certyfikaty" />
            <LineAfterTitle />
        </div>
    </div>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="row d-flex flex-md-row flex-column  justify-content-xxl-between justify-content-xl-evenly justify-content-center">
            <Certificate :key="certificate.id" v-for="certificate in this.certificates" :certificate="certificate" />
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

    data() {
        return {
            certificates: []
        }
    },

    created() {
        this.certificates = [
        {
            id: 1,
            imageUrl: "certificate.jpg",
            name: "Certyfikat Zarządzania Jakością",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            id: 2,
            imageUrl: "certificate.jpg",
            name: "Certyfikat Zarządzania Jakością",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            id: 3,
            imageUrl: "certificate.jpg",
            name: "Certyfikat Zarządzania Jakością",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            id: 4,
            imageUrl: "certificate.jpg",
            name: "Certyfikat Zarządzania Jakością",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            id: 5,
            imageUrl: "certificate.jpg",
            name: "Certyfikat Zarządzania Jakością",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            id: 6,
            imageUrl: "certificate.jpg",
            name: "Certyfikat Zarządzania Jakością",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        ]
    }
}
</script>