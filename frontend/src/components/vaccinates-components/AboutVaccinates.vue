<template>
    <div class="container mt-5">
        <MainTitle title="Co powinieneś wiedzieć o szczepieniach" />
        <LineAfterTitle />
        <VaccinatesContent content="Szczepienie nie jest obowiązkowe, jednak im więcej osób się zaszczepi, tym ochrona przed koronawirusem będzie skuteczniejsza." />
        <VaccinatesContent content="Szczepienie odbywać się będzie w pełnym reżimie sanitarnym" />
        <VaccinatesContent content="Przed szczepieniem otrzymasz kwestionariusz do wypełnienia" />
        <VaccinatesContent content="Szczepionka jest podawana domięśniowo, najlepiej w mięsień naramienny" />
        <VaccinatesContent content="Otrzymasz dwie dawki szczepionki (0,3 ml każda) w odstępie co najmniej 21 dni. Nie ma możliwości, by druga dawka została zastąpiona szczepionką innego producenta niż ta, która została podana w pierwszej dawce" />
        <VaccinatesContent content="Nie ma konieczności dostosowywania dawki u osób w wieku 65 lat i więcej" />
        <VaccinatesContent content="Szczepionka może nie zapewniać pełnej ochrony przed upływem co najmniej 7 dni od otrzymania drugiej dawki" />
        <VaccinatesContent content="Nie ma zaleceń dotyczących szczególnego przygotowania do szczepienia" />
        <VaccinatesContent content="O podaniu szczepionki zostaniesz pod obserwacją przez co najmniej 15 minut" />
    </div>
</template>

<script>
import MainTitle from '@/components/MainTitle'
import LineAfterTitle from '@/components/LineAfterTitle'
import VaccinatesContent from './VaccinatesContent'

export default {
    name: "AboutVaccinates",
    components: {
        VaccinatesContent,
        MainTitle,
        LineAfterTitle,
    }
}
</script>