<template>
    <div class="container">
            <div class="row px-3 pt-4 pb-1 justify-content-between">
                <Logo />
                <ClinicName />
                <Buttons />
            </div>
        </div>
</template>

<script>
import Logo from './Logo'
import ClinicName from './ClinicHeadingName'
import Buttons from './HeadingButtons'

export default {
    name: "HeadingSection",
    components: {
        Logo,
        ClinicName,
        Buttons
    }
}
</script>