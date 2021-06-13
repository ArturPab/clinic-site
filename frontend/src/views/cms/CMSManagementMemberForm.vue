<template>
    <div class="container pt-3 mb-5 ">
        <div class="row">
            <div class="col-12">
                <form class="needs-validation" @submit="onSubmit" novalidate>
                    <div class="form-floating my-3">
                        <input type="text" class="form-control" name="name" v-model="name" placeholder="Imię i nazwisko" required/>
                        <label for="name">Imię i nazwisko</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" name="jobPosition" v-model="jobPosition" placeholder="Stanowisko">
                        <label for="jobPosition">Stanowisko</label>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea class="form-control" placeholder="Podaj informacje o członku zarządu" name="about" v-model="about"></textarea>
                        <label for="about">Informacje</label>
                    </div>

                    <div class="form-group mb-3">
                        <input type="file" @change="onFileChange" multiple>
                    </div>

                    <input type="submit" value="Dodaj" class="btn btn-primary mb-3" />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CMSManagementMemberForm',

    data() {
        return {
            name: '',
            jobPosition: '',
            about: '',
            selectedFile: ''
        }
    },

    methods: {
        onFileChange(e) {
            const selectedFile = e.target.files[0]; // accessing file
            this.selectedFile = selectedFile;
        },
        
        
        onSubmit(e) {
            e.preventDefault()

            const formData = new FormData();
            formData.append("file", this.selectedFile);

            const newMember = {
                name: this.name,
                jobPosition: this.jobPosition,
                about: this.about,
                img: formData
            }

            this.$emit('add-member', newMember)

            this.clearMember()
        },

        clearMember() {
            this.fullName = ''
            this.jobPosition = ''
            this.about = ''
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: white;
        box-shadow: .1rem .2rem .4rem 0 ;
    }
</style>