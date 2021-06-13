<template>
    <div :class="pageClass">
        <CMSHeader />
        <div class="container-fluid panel">
            <div class="row">
                <div class="col-md-2 navbar-left">
                    <CMSNavbar />
                </div>
                <div class="col-md-10">
                    <router-view @disable-page="turnPage" @enable-page="turnPage" :isPanel="isPanel"></router-view>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
import CMSHeader from '@/components/cms-components/CMSHeader'

export default {
    name: 'CMSPanel',
    components: {
        CMSHeader
    },

    methods: {
        turnPage() {
            this.disabledPage = !this.disabledPage
            this.changePageClass()
        },

        changePageClass() {
            if(this.disabledPage) {
                this.pageClass = "panel-body disabled"
            }

            else {
                this.pageClass = "panel-body"
            }
        }
    },

    data() {
        return {
            isPanel: true,
            disabledPage: false,
            pageClass: "panel-body"
        }
    },

    created() {
        this.$emit('panel', this.isPanel)
    },
    emits() {
        ('panel', this.isPanel)
    }
}
</script>

<style scoped>
    .disabled {
        pointer-events: none;
        opacity: .4;
    }

    .navbar-left {
        padding-top: 0;
        background-color: rgb(39, 60, 78);
    }

    .col-md-10 {
        min-height: 59.4rem;
        padding-top: 2rem;
    }
</style>