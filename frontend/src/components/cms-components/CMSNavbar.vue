<template>
    <ul class="nav flex-column pt-3">
        <li class="nav-item">
            <router-link class="nav-link" to="#">Aktualności</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/panel/zarzad"> Zarząd </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="#"> Certyfikaty </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="#"> Nagrody i wyróżnienia </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="#"> Poradnie </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="#"> Szczepienia </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="#"> Prawa pacjenta </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'CMSNavbar'
}
</script>

<style scoped>

    a {
        color: white;
        padding-top: .75rem;
        padding-bottom: .75rem;
    }

    a:hover {
        background-color: rgb(46, 72, 94);
    }
</style>