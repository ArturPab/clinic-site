<template>
    <div class="accordion-item">
                        <h2 class="accordion-header" :id="`heading-${id}`">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse-${id}`" aria-expanded="false" :aria-controls="`collapse-${id}`">
                                <strong>{{right.rightTitle}}</strong>
                            </button>
                            </h2>
                            <div :id="`collapse-${id}`" class="accordion-collapse collapse" :aria-labelledby="`heading-${id}`" data-bs-parent="#accordion">
                                <AccordionBody :content="right.content" />
                            </div>
                    </div>
</template>

<script>
import AccordionBody from './AccordionBody'

export default {
    name: "AccordionItem",
    
    props: {
        right: Object
    },

    components: {
        AccordionBody
    },

    data() {
        return {
            id: this.right.id
        }
    },
}
</script>