<template>
    <div class="scroll-top">
        <a href="#" class="scroll-btn">
            <i class="fas fa-arrow-up"></i>
        </a>
    </div>
</template>

<script>
export default {
    name: "ScrollButton",
    methods: {
        showScroll() {
            document.querySelector('.scroll-top').classList.toggle("show-scroll", window.scrollY > 200);
        },
    },

    created() {
        window.addEventListener("scroll", () => {
            this.showScroll();
        })
    }
}
</script>

<style scoped>
    /* SCROLL BUTTON */
    .show-scroll .scroll-btn {
        visibility: inherit;
        opacity: 1;
        transform: translateY(0%);
    }

    .scroll-btn {
        position: fixed;
        bottom: 3rem;
        right: 2.8rem;
        font-size: 1.2rem;
        color: white;
        background-color: var(--blue-5);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.8rem;
        height: 3rem;
        border-radius: .2rem;
        box-shadow: 0 .2rem .4rem rgba(0, 0, 0, .4);
        transition: all .5s;
        visibility: hidden;
        opacity: 0;
        transform: translateY(100%);
    }

    .scroll-btn:hover {
        color: white;
    }
    .fa-arrow-up {
        border:none
    }
</style>