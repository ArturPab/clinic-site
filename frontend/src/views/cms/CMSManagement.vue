<template>
    <div>
        <div class="container mb-3">
            <div class="row">
                <div class="col-12 d-flex justify-content-md-end justify-content-center">
                        <CMSButton buttonName="Dodaj" buttonClass="btn btn-success" @add-member="scrollToForm" />
                </div>
            </div>
        </div>
        <PersonCard @disable-page="$emit('disable-page')" @decline="$emit('enable-page')" @delete-member="deleteMember" :key="person.id" v-for="person in management" :person="person" :isPanel="isPanel" />
        <CMSManagementMemberForm v-show="isFormOpened" ref="memberForm" @add-member="addMember" />
    </div>
</template>

<script>
import PersonCard from '@/components/about-components/PersonCard'
import CMSManagementMemberForm from "./CMSManagementMemberForm"
import axios from "axios";

export default {
    name: 'CMSManagement',
    components: {
        PersonCard,
        CMSManagementMemberForm
    },
    props: {
        isPanel: Boolean
    },

    data() {
        return {
            management: [],
            alertOpen: false,
            isActionAccepted: false,
            isFormOpened: false
        }
    },

    async created() {
        this.management = await this.fetchManagementData()
    },

    methods: {
        // async addMember(member) {
        //     const res = await fetch('http://localhost:3000/api/about-us/management/add', member.img, {
        //         method: 'POST',
        //         headers: {
        //             'Content-type': 'application/json',
        //             'Accept': 'application/json'
        //         },
        //         body: JSON.stringify(member)
        //     })

        //     const data = await res.json()

        //     this.management = [...this.management, data]
        // },

        addMember(newMember) {
            axios
                .post("http://localhost:3000/api/about-us/management/add", {
                    name: newMember.name,
                    jobPosition: newMember.jobPosition,
                    about: newMember.about,
                    img: newMember.img
                })
                .then(res => {
                console.log(res);
                })
                .catch(err => {
                console.log(err);
                });
        },

        scrollToForm() {
            this.isFormOpened=true
            const form = this.$refs.memberForm

            form.scrollTop = form.scrollHeight
        }, 

        async fetchManagementData() {
            const res = await fetch('http://localhost:3000/api/about-us/management', {
                headers: {
                    'Content-type': 'application/json'
                }
            })
 
            const data = res.json()

            return data
        },

        enablePage() {
            this.$emit('enable-page')
        },

        async deleteMember(id) {
            this.enablePage()
            const res = await fetch(`http://localhost:3000/api/about-us/management/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                },
            })

                res.status === 200 ? this.management = this.management.filter((member) => member._id !== id) : alert('Błąd podczas usuwania członka zarządu!')
        }
    }
}
</script>