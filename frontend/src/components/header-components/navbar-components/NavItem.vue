<template>
    <li v-if="navItem.isDropdown" class="nav-item dropdown d-flex justify-content-center justify-content-sm-start">
        <router-link class="nav-link dropdown-toggle text-reset" :to="navItem.navLink" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{navItem.navText}}
        </router-link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <DropdownItem :key="dropdownItem.id" v-for="dropdownItem in navItem.dropdownItems" :dropdownItem="dropdownItem" />
        </ul>
    </li>

    <li v-else class="nav-item px-1 d-flex justify-content-center justify-content-sm-start">
        <router-link :to="navItem.navLink" class="nav-link text-reset">
            {{navItem.navText}}
        </router-link>
    </li>
</template>

<script>
import DropdownItem from "./DropdownItem"

export default {
    name: "NavItem",
    props: {
        navItem: Object
    },

    components: {
        DropdownItem
    }
}
</script>

<style scoped>
    .nav-item {
    border-top: 2px solid transparent;
    margin-right: 1rem;
}

.nav-item:hover {
    border-top: 2px solid var(--blue-5);
    color: var(--blue-5);
}

.dropdown-menu {
    padding: 0;
    border: 0; 
    background-color: rgba(4, 143, 194, 0.9);
}

@media (min-width: 768px) {  

    .dropdown:hover>.dropdown-menu {
        display: block;
        margin: 0;
    } 
}
</style>