<template>
    <div class="container pb-5">
        <div class="card mb-5 shadow" style="max-width:1600px">
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
    </div>
</template>

<script>
import PersonImage from './PersonImage'
import PersonName from './PersonName'
import PersonJobPosition from './PersonJobPosition'
import PersonAbout from './PersonAbout'

export default {
    name: "PersonCard",
    props: {
        person: Object
    },
    components: {
        PersonImage,
        PersonName,
        PersonJobPosition,
        PersonAbout
    }
}
</script>