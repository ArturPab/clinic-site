<template>
    <div class="container">
        <div class="row">
            <div class="col-12 pb-5">
                <div class="accordion" id="accordion">
                    <AccordionItem :key="right.id" v-for="right in rights"
                    :right="right" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AccordionItem from './AccordionItem'

export default {
    name: "RightsContent",
    components: {
        AccordionItem
    },

    props: {
        rights: Array
    },
    
}
</script>