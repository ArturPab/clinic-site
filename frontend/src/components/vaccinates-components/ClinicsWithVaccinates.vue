<template>
    <div class="container mt-5">
        <MainTitle title="Przychodnie realizujące szczepienia" />
        <LineAfterTitle />
        <VaccinatesContent content="E-skierowanie do szczepienia będzie generowane automatycznie i ważne 60 dni. Lekarze będą też mogli wystawić pacjentowi indywidualne e-skierowanie (np. gdy ktoś nie ma PESEL lub nie mógł się zaszczepić w okresie ważności pierwszego e-skierowania)." />
        <VaccinatesContent content="Po dokonaniu rezerwacji wizyty każdy otrzyma SMS-a z informacją o wybranym miejscu i terminie szczepienia. W dniu szczepienia Pacjent będzie umawiany na wizytę na drugą dawkę szczepionki i powiadamiany również SMS-em." />
        <InfoAndSignUp phone="(32) 000 00 00" />

        <!-- covid-clinics to do -->
        <div class="covid-clinics">   
        </div>
    </div>
</template>

<script>
import MainTitle from '@/components/MainTitle'
import LineAfterTitle from '@/components/LineAfterTitle'
import VaccinatesContent from './VaccinatesContent'
import InfoAndSignUp from './InfoAndSignUp'

export default {
    name: "ClinicsWithVaccinates",
    components: {
        VaccinatesContent,
        InfoAndSignUp,
        MainTitle,
        LineAfterTitle
    }
}
</script>