

<template>
    <nav id="navbar_top" class="navbar navbar-expand-md nabvar-white bg-white p-0 m-0 p-0 m-0">
        <div class="container-sm">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon d-flex align-items-center justify-content-center"><i class="fas fa-bars"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav p-0 m-0 mt-1">
                    <NavItem :key="navItem.id" v-for="navItem in navItems" :navItem="navItem"/>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import NavItem from './navbar-components/NavItem'

export default {
    name: "Navbar",
    components: {
        NavItem
    },

    data() {
        return {
            navItems: []
        }
    },

    created() {
        this.navItems = [
            {
                id: 1,
                navLink: "#",
                navText: "O NAS",
                isDropdown: true,
                dropdownItems: [
                    {
                        id: 1,
                        link: "/o-nas",
                        section: "#zarzad",
                        text: "Zarząd"
                    },

                    {
                        id: 2,
                        link: "/o-nas",
                        section: "#certyfikaty",
                        text: "Certyfikaty"
                    },

                    {
                        id: 3,
                        link: "/o-nas",
                        section: "#nagrody",
                        text: "Nagrody i wyróżnienia"
                    },
                ]
            },

            {
                id: 2,
                navLink: "/szczepienia",
                navText: "SZCZEPIENIA",
                isDropdown: false,
                dropdownItems: []
            },

            {
                id: 3,
                navLink: "#",
                navText: "PLACÓWKI",
                isDropdown: false,
                dropdownItems: []
            },

            {
                id: 4,
                navLink: "/poradnie",
                navText: "PORADNIE",
                isDropdown: false,
                dropdownItems: []
            },

            {
                id: 5,
                navLink: "#",
                navText: "PACJENT",
                isDropdown: true,
                dropdownItems: [
                    {
                        id: 1,
                        link: "/prawa-pacjenta",
                        text: "Prawa pacjenta"
                    },
                ]
            },
        ]
    }
}
</script>

<style scoped>
.navbar-toggler-icon:active {
    border: 0;
}

.navbar {
    min-height: 50px;
    color: var(--blue-4);
    font-weight: 500;
}
</style>