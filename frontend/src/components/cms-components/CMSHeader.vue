<template>
    <div class="container-fluid">
        <div class="row py-2">
            <div class="col-12 col-xl-2 col-md-4 d-flex justify-content-center">
                <span class="justify-content-center"><router-link class="admin-logo fs-3 fw-light" to="/panel"> PLMRIS admin </router-link></span>
            </div>

            <div class="col-12 col-xl-10 col-md-8 d-flex align-items-center justify-content-md-end justify-content-center">
                <router-link class="me-md-3 logout" to="#">
                    Wyloguj się
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CMSHeader'
}
</script>

<style scoped>

    a {
        text-decoration: none;
    }

    .admin-logo {
        color: #555;
    }

    .logout {
        color: black;
    }

    .logout:hover {
        color: #444;
    }
</style>
