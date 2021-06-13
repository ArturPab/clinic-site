<template>
    <button v-if="buttonName==='Usuń'" type="button" @click="$emit('delete-member')" :class="buttonClass">{{buttonName}}</button>
    <button v-else-if="buttonName==='Dodaj'" type="button" @click="$emit('add-member')" :class="buttonClass">{{buttonName}}</button>
    <button v-else-if="buttonName==='Edytuj'" type="button" @click="$emit('edit-member')" :class="buttonClass">{{buttonName}}</button>
    <button v-else-if="buttonName==='Potwierdź'" type="button" @click="$emit('confirm')" :class="buttonClass">{{buttonName}}</button>
    <button v-else-if="buttonName==='Anuluj'" type="button" @click="$emit('decline')" :class="buttonClass">{{buttonName}}</button>
</template>

<script>
export default {
    name: 'CMSButton',
    props: {
        buttonName: String,
        buttonClass: String
    },
    
}
</script>

<style scoped>
    button {
        margin: 0 .2rem
    }
</style>