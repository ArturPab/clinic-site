<template>
    <div class="container mt-5">
        <MainTitle title="Zgłoś i omów z personelem szczepiącym, jeżeli:" />
        <LineAfterTitle />
        <VaccinatesContent content="Miałeś ciężką reakcję alergiczną lub zaburzenia oddychania po jakimkolwiek szczepieniu" />
        <VaccinatesContent content="Zemdlałeś po zastrzyku" />
        <VaccinatesContent content="Chorujesz na cokolwiek w tej chwili" />
        <VaccinatesContent content="Masz problemy z krzepnięciem krwi, łatwo tworzą się siniaki lub przyjmujesz leki przeciwzakrzepowe" />
        <VaccinatesContent content="Masz osłabiony układ immunologiczny w wyniku choroby, takiej jak zakażenie wirusem HIV" />
        <VaccinatesContent content="Przyjmujesz leki (np. kortykosteroidy) wpływające na odporność oraz leki immunosupresyjne" />
        <ImportantContent content="Dodatkowo:" />
        <VaccinatesContent content="Powiedz personelowi o wszystkich lekach stosowanych obecnie lub ostatnio, a także o lekach, które planujesz stosować oraz o jakichkolwiek niedawno otrzymanych szczepionkach" />
        <VaccinatesContent content="Nie zostaniesz zaszczepiony/a, jeśli masz ciężką chorobę przebiegającą z gorączką lub ostrą infekcją. Występowanie łagodnej infekcji i/lub niewielkiej gorączki nie powinno prowadzić do przesunięcia szczepienia" />
    </div>
</template>

<script>
import MainTitle from '@/components/MainTitle'
import LineAfterTitle from '@/components/LineAfterTitle'
import VaccinatesContent from './VaccinatesContent'
import ImportantContent from './ImportantContent'

export default {
    name: "ReportProblem",
    components: {
        VaccinatesContent,
        MainTitle,
        LineAfterTitle,
        ImportantContent
    }
}
</script>