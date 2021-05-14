<template>
    <div class="col-12 col-xl-3 col-md-4 d-md-flex align-items-center justify-content-md-end d-grid gap-2 d-md-block  mb-2">
        <Button :key="button.id" v-for="button in buttons" :button="button" />
    </div>
</template>

<script>
import Button from "./HeadingButton"

export default {
    name: "Buttons",
    components: {
        Button
    },

    data() {
        return {
            buttons: []
        }
    },

    created() {
        this.buttons = [
            {
                id: 1,
                buttonLink: "tel:+481111111",
                buttonText: "(32) 111 11 11",
                buttonClass: "btn btn-danger contact-number d-grid px-5 py-2"
            },
        ]
    }
}
</script>