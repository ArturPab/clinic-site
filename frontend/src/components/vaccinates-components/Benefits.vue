<template>
    <div class="container mt-5">
        <MainTitle title="Korzyści wynikające z zaszczepienia się" />
        <LineAfterTitle />
        <VaccinatesContent content="Osoby zaszczepione nie zakażają innych i same nabywają odporność na koronawirusa. To możliwość długo oczekiwanego powrotu do normalności, otwarcia placówek kulturalnych, siłowni i basenów, odmrożenie gospodarki." />
        <VaccinatesContent content="Zaszczepieni nie będą musieli nosić maseczek, odbywać kwarantanny. Będą mogli spotykać się swobodnie z rodziną i przyjaciółmi. Linie lotnicze deklarują, że szczepienie stanie się warunkiem wejścia na pokład." />
    </div>
</template>

<script>
import MainTitle from '@/components/MainTitle'
import LineAfterTitle from '@/components/LineAfterTitle'
import VaccinatesContent from './VaccinatesContent'

export default {
    name: "Benefits",
    components: {
        VaccinatesContent,
        MainTitle,
        LineAfterTitle,
    }
}
</script>