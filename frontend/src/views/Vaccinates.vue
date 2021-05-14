<template>
    <ClinicsWithVaccinates />
    <HowToSignUpInfo />
    <AboutVaccinates />
    <ReportProblem />
    <Benefits />
    <VaccinatesVideos />
</template>

<script>
import ClinicsWithVaccinates from '@/components/vaccinates-components/ClinicsWithVaccinates'
import HowToSignUpInfo from '@/components/vaccinates-components/HowToSignUpInfo'
import AboutVaccinates from '@/components/vaccinates-components/AboutVaccinates'
import ReportProblem from '@/components/vaccinates-components/ReportProblem'
import Benefits from '@/components/vaccinates-components/Benefits'
import VaccinatesVideos from '@/components/vaccinates-components/VaccinatesVideos'

export default {
    name: "Vaccinates",
    components: {
        ClinicsWithVaccinates,
        HowToSignUpInfo,
        AboutVaccinates,
        ReportProblem,
        Benefits,
        VaccinatesVideos
    }
}
</script>