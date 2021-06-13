<template>
    <div class="container pb-5">
        <CMSButtons @delete-member="enableAlert" :className="CMSButtonsClass" :id="person._id" />
        <div v-click-away="onClickOutside" @click="showButtons()" :class="cardClass" :data-id="person._id" style="max-width:1600px">
            <div class="row g-0">
                <PersonImage :imgSrc="person.imgPath" :altName="person.name"/>
                <div class="col-md-8">
                    <div class="card-body">
                        <PersonName :fullName="person.name" />
                        <PersonJobPosition :jobPosition="person.jobPosition" />
                        <PersonAbout :about="person.about" />
                    </div>
                </div>
            </div>
        </div>

        <teleport to="#app">
            <Alert :id="id" @confirm="deleteAndInactiveCard" @decline="decline" v-if="alertOpen" />
        </teleport> 
    </div>
</template>

<script>
import PersonImage from './PersonImage'
import PersonName from './PersonName'
import PersonJobPosition from './PersonJobPosition'
import PersonAbout from './PersonAbout'
import { mixin as VueClickAway } from "vue3-click-away";

export default {
    name: "PersonCard",
    props: {
        person: Object,
        isPanel: Boolean,
    },
    mixins: [VueClickAway],
    components: {
        PersonImage,
        PersonName,
        PersonJobPosition,
        PersonAbout
    },

    emits: ['delete-member'],

    data() {
        return {
            cardClass: "",
            areCMSButtonsActive: false,
            CMSButtonsClass: "",
            isCardActive: false,
            alertOpen: false
        }
    },

    created() {
        if(this.isPanel) {
            this.cardClass = "card mb-5 shadow panel-card"
        }
        
        else {
            this.cardClass = "card mb-5 shadow"
        }

        this.assignCMSButtonsClass();
    },

    methods: {
        changeAlertStatus() {
            this.alertOpen = !this.alertOpen
        },

        decline() {
            this.$emit('decline')
            this.changeAlertStatus()
        },

        enableAlert() {
            this.changeAlertStatus()
            this.$emit("disable-page")
        },

        deleteAndInactiveCard() {
            this.changeAlertStatus()
            this.$emit('delete-member', this.person._id)
            this.showButtons()
        },

        showButtons() {
            if(this.isPanel) {
                this.areCMSButtonsActive = !this.areCMSButtonsActive
                this.assignCMSButtonsClass()
                this.activeCard()
            }
        },

        assignCMSButtonsClass() {
            if(this.areCMSButtonsActive) {
                this.CMSButtonsClass = "cms-buttons"
            }
    
            else {
                this.CMSButtonsClass = "cms-buttons disabled"
            }
        },

        activeCard() {
            this.isCardActive = !this.isCardActive
            if(this.isCardActive) {
                this.cardClass = "card mb-5 shadow panel-card active"
            }

            else {
                this.cardClass = "card mb-5 shadow panel-card"
            }
        },

        onClickOutside() {
            this.areCMSButtonsActive = false
            this.CMSButtonsClass = "cms-buttons disabled"
            this.isCardActive = false
            this.cardClass = "card mb-5 shadow panel-card"
           
        }

    },

}
</script>

<style scoped>
    .panel-card {
        cursor: pointer;
    }

    .active{
        background-color: rgba(0, 0, 0, .4);
    }

</style>
