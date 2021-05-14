<template>
    <li>
        <router-link class="dropdown-item text-reset" :to="dropdownItem.link" v-scroll-to="dropdownItem.section">
            {{dropdownItem.text}}
        </router-link>
    </li>
</template>

<script>
export default {
    name: "DropdownItem",
    props: {
        dropdownItem: Object
    }
}
</script>

<style scoped>

li {
    border-bottom: 1px solid #fff9;
    color: white;
}

li:last-child {
    border: none;
}


li > a {
    height: 3rem;
    display: flex;
    align-items: center;
    font-weight: 500;

}

li:hover > a {
    background-color: rgba(3, 130, 177, 0.9);
}
</style>