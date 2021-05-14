<template>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <Header />
    <Banner />
    <router-view />
    <Footer content="Copyright &copy Przychodnia Lekarska Medycyny rodzinnej i specjalistycznej. Wszelkie Prawa Zastrzeżone.Kopiowanie, przetwarzanie i rozpowszechnianie tych materiałow w całosci lub w części bez zgody właściciela jest zabronione i stanowi naruszenie praw autorskich."/>
    <ScrollButton />
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'
import ScrollButton from './components/ScrollButton'

export default {
    name: 'App',
    components: {
        Header,
        Banner,
        Footer,
        ScrollButton
    },
}
</script>

<style>
:root {
    --blue-1: #5680E9;
    --blue-2: #5AB9EA;
    --blue-3: #84CEEB;
    --gray-1: #C1C8E4;
    --purple-1: #8860D0;

    --blue-4: #1b1455;
    --blue-5: #048fc2;
    --blue-6: #8fd6e1;
    --red-1: #7b113a;
}

* {
    padding: 0;
    margin: 0;
}

#app {
    height: 100%;
    width: 100%;
}

html {
    scroll-behavior: smooth;
}

h1 {
    color: var(--blue-4);
}
</style>
