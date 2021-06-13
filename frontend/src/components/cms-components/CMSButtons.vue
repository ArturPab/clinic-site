<template>
    <div :class="className">
        <CMSButton buttonClass="btn btn-warning" :data-id="id" buttonName="Edytuj" />
        <CMSButton buttonClass="btn btn-danger" @delete-member="$emit('delete-member')" :data-id="id" buttonName="Usuń" />
    </div>
</template>

<script>
export default {
    name: 'CMSButtons',
    props: {
        className: String,
        id: String
    },

    emits: ['delete-member'],

}
</script>

<style scoped>
    .cms-buttons {
        opacity: 1;
        transition: all .15s;
        text-align: right;
    }

    .disabled {
        opacity: 0;
        pointer-events: none;
    }
</style>